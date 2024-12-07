import React from 'react'
import CheckoutSteps from '../components/checkoutSteps'
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import  Button  from 'react-bootstrap/Button';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../Store';
import { useNavigate } from 'react-router-dom';

export default function PaymentMethodScreen() {

    const navigate=useNavigate()

    const { state, dispatch: ctxDispatch } = useContext(Store);
const{
    cart:{shippingAddress,paymentMethod}
}=state
const[paymentMethodName,setPaymentMethod]=useState()

useEffect(()=>{
if(!shippingAddress.address){
    navigate('/shipping')
}
},[shippingAddress,navigate])

    const submitHandler=(e)=>{
        e.preventDefault()
        ctxDispatch({type:"SAVE_PAYMENT_METHOD",payload:paymentMethodName})
        localStorage.setItem('paymentMethod',paymentMethodName)
        navigate('/placeorder')
    }

  return (
    <div> <CheckoutSteps step1 step2 step3></CheckoutSteps>
    <div className='container small-container'>
        <Helmet>
            <title>Payment Method</title>
        </Helmet>
        <h1 className='my-3'>Payment Method</h1>
        <Form onSubmit={submitHandler}>
            <div className='mb-3'>
        <Form.Check type="radio"
         id="PayPal" 
         label="Paypal" 
         value="PayPal" 
         checked={paymentMethodName==='PayPal'}
         onChange={(e)=>setPaymentMethod(e.target.value) }/>
            </div>
            <div className='mb-3'>
        <Form.Check type="radio"
         id="Stripe" 
         label="Stripe" 
         value="Stripe" 
         checked={paymentMethodName==='Stripe'}
         onChange={(e)=>setPaymentMethod(e.target.value) }/>
            </div>

            <div className='mb-3'>
        <Form.Check type="radio"
         id="UPI" 
         label="UPI" 
         value="UPI" 
         checked={paymentMethodName==='UPI'}
         onChange={(e)=>setPaymentMethod(e.target.value) }/>
            </div>

            <div className='mb-3'>
        <Form.Check type="radio"
         id="Pay with Debit/Credit/ATM Cards" 
         label="Pay with Debit/Credit/ATM Cards" 
         value="Pay with Debit/Credit/ATM Cards" 
         checked={paymentMethodName==='Pay with Debit/Credit/ATM Cards'}
         onChange={(e)=>setPaymentMethod(e.target.value) }/>
            </div>

            <div className='mb-3'>
        <Form.Check type="radio"
         id="EMI" 
         label="EMI" 
         value="EMI" 
         checked={paymentMethodName==='EMI'}
         onChange={(e)=>setPaymentMethod(e.target.value) }/>
            </div>

            <div className='mb-3'>
        <Form.Check type="radio"
         id="Net Banking" 
         label="Net Banking" 
         value="Net Banking" 
         checked={paymentMethodName==='Net Banking'}
         onChange={(e)=>setPaymentMethod(e.target.value) }/>
            </div>

            <div className='mb-3'>
        <Form.Check type="radio"
         id="COD (Cash on Delivery)" 
         label="COD (Cash on Delivery)" 
         value="COD (Cash on Delivery)" 
         checked={paymentMethodName==='COD (Cash on Delivery)'}
         onChange={(e)=>setPaymentMethod(e.target.value) }/>
            </div>

           
<div className='mb-3'>
<Button type="submit">Continue</Button>
</div>
        </Form>
    </div>
    </div>
  )
}
