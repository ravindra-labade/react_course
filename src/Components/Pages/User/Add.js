import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add() {

    const {register, handleSubmit} = useForm()

    const navi = useNavigate()

    function saveData(data) {
        axios.post('http://localhost:5000/users', data)
        navi('/show')
    }
  return (
    <>
    <div className='container w-50 mt-5'>
        <center><u><h2>COURSE PAGE</h2></u></center>
        <form onSubmit={handleSubmit(saveData)}className='mt-5'>
            <label htmlFor='s'><b>SR NO</b></label>
            <input type='number' id='s' className='form-control' {...register('sr')} />
            <br /> <br />

            <label htmlFor='n'><b>COURSE NAME</b></label>
            <input type='text' id='n' className='form-control' {...register('cname')}/>
            <br /> <br />

            <label htmlFor='t'><b>TUTOR</b></label>
            <input type='text' id='t' className='form-control' {...register('tutor')}/>
            <br /> <br />

            <input type='submit' value="ADD COURSE" className='btn btn-outline-success col-6'/>
            <input type='reset' value="RESET" className='btn btn-outline-warning col-6' />
        </form>
    </div>
    </>
  )
}

export default Add