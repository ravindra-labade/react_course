import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
    const navi = useNavigate();

    const {course} = useParams();

    const {register, handleSubmit} = useForm({defaultValues: async()=>(await axios.get(`http://localhost:5000/users/${course}`)).data});

    function saveData(data){
        axios.put(`http://localhost:5000/users/${course}`, data);
        navi('/show')
    }
  return (
    <>
    <div className='container w-50 mt-5'>
        <center><u><h2>COURSE UPDATE PAGE</h2></u></center>
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

            <input type='submit' value="UPDATE COURSE" className='btn btn-outline-success col-6'/>
            <input type='reset' value="RESET" className='btn btn-outline-warning col-6' />
        </form>
    </div>
    </>
  )
}

export default Update