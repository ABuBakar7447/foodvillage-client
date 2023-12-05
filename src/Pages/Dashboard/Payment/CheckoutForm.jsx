import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";




const CheckoutForm = ({ cart, price ,refetch }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [errormessage, setErrorMessage] = useState('')
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(true);
    const [transectionId, settransectionId] = useState('')

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    // console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            // console.log('error', error);
            setErrorMessage(error.message)
        }

        else {
            setErrorMessage('');
            // console.log('PaymentMethod', paymentMethod)
        }
        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anoynomus',
                        email: user?.email || 'unknown',
                    },
                },
            },
        );

        if (confirmError) {
            // console.log(confirmError);
            setErrorMessage(confirmError);
        }

        // console.log(paymentIntent)
        setProcessing(false);

        if (paymentIntent.status === 'succeeded') {
            settransectionId(paymentIntent.id);

            const payment = {
                date: new Date(),
                email: user?.email,
                name: user?.displayName,
                price,
                quantity: cart.length,
                cartItemId: cart.map(item => item._id),
                menuItemId: cart.map(menu => menu.foodId),
                itemNames: cart.map(foodname => foodname.name),
                transectionID: paymentIntent.id,
                status: 'delivery processing'
            }

            axiosSecure.post('/payment', payment)
            .then( res =>{
                // console.log(res.data)
                if(res.data.insertResult.insertedId) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Payment Successful',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="p-10 flex flex-col">
                <CardElement className="p-5 w-1/2 mx-auto bg-white"

                    options={{
                        style: {
                            base: {

                                iconColor: 'black',
                                fontSize: '16px',
                                color: 'black',
                                '::placeholder': {
                                    color: 'black',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary mx-auto m-5" type="submit" disabled={!stripe || !clientSecret || !processing}>
                    Pay
                </button>
            </form>
            {transectionId && <p className="font-bold text-green-500 text-center">Your Transection ID:{transectionId}</p>}
            {errormessage && <p>{errormessage}</p>}
        </div>
    );
};

export default CheckoutForm;