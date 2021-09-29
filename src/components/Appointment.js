import React from 'react';
import Recaptcha from 'react-recaptcha';


 function Appointment(props) {
  return (
    <React.Fragment>

    <div class="container">
    <h2>Schedule Job</h2>
    <form class="form-horizontal" method="POST" action="http://localhost:4000/job/add">

    <div class="form-group ">
        <label class="control-label col-sm-2"  for="name" >Job Name</label>
        <div class="col-sm-8">
            <input onChange={props.handleChange} name="name" type="text" class="form-control" id="name" aria-describedby="name" placeholder="Enter Name" required></input>
            <small id="jobnumHelp" class="form-text text-muted">Job reference name</small>
        </div>
    </div>
    
        <div class="form-group ">
            <label class="control-label col-sm-2"  for="num">Job Number</label>
            <div class="col-sm-8">
                <input name="num" type="text" class="form-control" id="num" aria-describedby="jobNumber" placeholder="Enter Job Number"></input>
                <small id="jobnumHelp" class="form-text text-muted">Job reference number</small>
            </div>
        </div>
    
        <div class="form-group ">
        <label class="control-label col-sm-2" for="address">Address </label>
            <div class="col-sm-8">
                <input name="address" type="text" class="form-control" id="address" aria-describedby="address" placeholder="Job's Address"></input>
                <small id="addressHelp" class="form-text text-muted">Addres of locaion where inspection would take place</small> 
            </div>
        </div>


        <div class="form-group ">
        <label class="control-label col-sm-2" for="phone">Phone Number:</label>
        <div class="col-sm-8">
            <input type="tel" class="form-control" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
            <small>Format: 123-456-7890</small>
        </div>
        </div>

        <div class="form-group ">
        <label class="control-label col-sm-2" for="date">Desired Date</label>
            <div class="col-sm-8">
            <input type="date" id="date" name="date" class="form-control" aria-describedby="date"  ></input>
            <small id="dateHelp" class="form-text text-muted">We will contact you to solve any conflict</small>
            </div>
        </div>



        <div class="form-group ">
        <label class="control-label col-sm-2" for="date">Desired Time</label>
            <div class="col-sm-8">
            <input type="time" class="form-control" id="time" name="time"  min="6:00" max="18:00" required/>
            <small id="timeHelp" class="form-text text-muted">We will contact you to solve any conflict</small>
            </div>
        </div>


        <div class="form-group ">
        <label class="control-label col-sm-2" ffor="visualInspection">Inspection</label>
            <div class="col-sm-8">
            <select name="visualInspection" class="form-control" id="visualInspection">
            <option>Select Type</option>
            <option>CWI Visual Inspection</option>
            <option>UT Ultrasonic Inspection</option>
            <option>UTT Ultrasonic Thickness</option>
            <option>MT Magnetic Particles</option>
            <option>PT Liquid Penetrant</option>
            <option>PAUT Phased Array ultrasonic testing</option>
            <option>Audit</option>
            <option>CWI-WPS</option>
            <option>CWI-Welder Qualification / Testing</option>
            <option>Other</option>
            </select>
            <small id="addressHelp" class="form-text text-muted">Select inspection type</small>  
            </div>
        </div>

        <div class="form-group ">
        <label class="control-label col-sm-2" for="notes">Notes:</label>
        <div class="col-sm-8">
        <div><textarea name="notes" width="100%" class="form-control" rows="5" id="notes"></textarea></div>
        </div>
        </div>

        <div class="form-group ">
        <label class="control-label col-sm-2" for="notes"></label>
        <div class="col-sm-8">
        <div>
        <button  type="submit" class="btn btn-primary">Submit</button>
        
        <div>
                <Recaptcha
            sitekey="6LdYjqgUAAAAAFAHuVMqn7k2t0LgWSlGZrIKhmzT"
            render="explicit"
            onloadCallback={props.recaptchaLoaded}/>
        </div>

        </div>
        </div>
        </div>

    

    
    </form>
    </div>

  
     </React.Fragment>
  )
}

export default Appointment;