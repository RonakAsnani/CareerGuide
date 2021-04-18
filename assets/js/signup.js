student = document.getElementById('btttn-1');
mentor = document.getElementById('btttn-2');
let doc = document.getElementById('bottom');

student.addEventListener('click', function () {
    doc.innerHTML = `






    <form action="/users/create" method="POST">
    
    <div class="form-group row">
        <label for="inputName3" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="inputName3" name="name" placeholder="Name">
        </div>
    </div>
    <br> <br>

    <div class="form-group row">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" name="email" required placeholder="Email">
        </div>
    </div>
    <br> <br>

    <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3" name="password" required placeholder="Password">
        </div>
    </div>
    <br> <br>
    <div class="form-group row">
    <label for="inputPassword4" class="col-sm-2 col-form-label">Confirm Password</label>
    <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword4" name="confirm_password" required placeholder="Confirm Password">
    </div>
    <br> <br>
    
    <div class="row" style="display:none;" >
            <legend class="col-form-label col-sm-2 pt-0">Check Box</legend>
            <div class="col-sm-10">
                
        
              

                <div class="form-check">
                <input class="form-check-input" name="field" type="checkbox" value="student" id="flexCheckCheckedDisabled" checked >
                <label class="form-check-label" for="flexCheckCheckedDisabled">
                   checked checkbox
                </label>
              </div>
                
            </div>
        </div>


        

        <br> <br>
   

<fieldset class="form-group">
        <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Interest</legend>
            <div class="col-sm-10">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox"  id="gridRadios1" value="option1"
                        >
                    <label class="form-check-label" for="gridRadios1">

                        Coding

                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox"  id="gridRadios2" value="option2">
                    <label class="form-check-label" for="gridRadios2">
                        Finance
                    </label>
                </div>
                <div class="form-check ">
                    <input class="form-check-input" type="checkbox"  id="gridRadios3" value="option3"
                        >
                    <label class="form-check-label" for="gridRadios3">
                        Research
                    </label>
                </div>
                
            </div>
        </div>
    </fieldset>
    <br> <br>

<div class="form-group row" style="    text-align: center;
margin-top: 25px;">
    <div class="col-sm-10">
        <button type="submit" class="btn btn-primary">Sign up</button>
    </div>
</div>
<br> <br>
</form>



    
    
   
    `
})



// mentor

mentor.addEventListener('click', function () {
    doc.innerHTML = `

    <form action="/users/create" method="POST">
    
    <div class="form-group row">
        <label for="inputName3" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="inputName3" name="name" required placeholder="Name">
        </div>
    </div>
    <br><br>

    <div class="form-group row">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" name="email" required placeholder="Email">
        </div>
    </div>
    <br><br>


    <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3" name="password" required placeholder="Password">
        </div>
    </div>
    <br><br>

    <div class="form-group row">
        <label for="inputPassword4" class="col-sm-2 col-form-label">Confirm Password</label>
        <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword4" name="confirm_password" required placeholder="Confirm Password">
        </div>
    </div>
    <br><br>

    <div class="row" style="display:none;" >
    <legend class="col-form-label col-sm-2 pt-0">Check Box</legend>
    <div class="col-sm-10">

        <div class="form-check">
        <input class="form-check-input" name="field" type="checkbox" value="mentor" id="flexCheckCheckedDisabled1" checked >
        <label class="form-check-label" for="flexCheckCheckedDisabled1">
           checked checkbox
        </label>
      </div>
        
    </div>
    </div>


    <fieldset class="form-group">
        <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Expertise</legend>
            <div class="col-sm-10">
                <div class="form-check">

                    <input class="form-check-input" type="radio" name="interest" required id="gridRadios1" value="web-development"
                        checked>
                    <label class="form-check-label" for="gridRadios1">
                        Web Development
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="interest" required id="gridRadios2" value="app-development">
                    <label class="form-check-label" for="gridRadios2">
                        Android Development
                    </label>
                </div>
                <div class="form-check ">
                    <input class="form-check-input" type="radio" name="interest" required id="gridRadios3" value="competitve"
                        >
                    <label class="form-check-label" for="gridRadios3">
                        Competitive Programming
                    </label>
                </div>
                <div class="form-check ">
                    <input class="form-check-input" type="radio" name="interest" required id="gridRadios3" value="machine-learning"
                        >
                    <label class="form-check-label" for="gridRadios3">
                        Machine Learning
                    </label>
                </div>
                <div class="form-check ">
                    <input class="form-check-input" type="radio" name="interest" required id="gridRadios3" value="data-analytics"
                        >
                    <label class="form-check-label" for="gridRadios3">
                        Data Analytics
                    </label>
                </div>
                <div class="form-check ">
                    <input class="form-check-input" type="radio" name="interest" required id="gridRadios3" value="mba"
                        >
                    <label class="form-check-label" for="gridRadios3">
                        MBA
                    </label>
                </div>
                <div class="form-check ">
                    <input class="form-check-input" type="radio" name="interest" required id="gridRadios3" value="finance"
                        >
                    <label class="form-check-label" for="gridRadios3">

                        Finance
                    </label>
                </div>
                <div class="form-check ">

                    <input class="form-check-input" type="radio" name="interest" required id="gridRadios3" value="music"
                        >
                    <label class="form-check-label" for="gridRadios3">
                       Music


                    </label>
                </div>
            </div>
        </div>
    </fieldset>
    <br><br>

    <div class="form-group row" style="    text-align: center;
    margin-top: 25px;">
    <div class="col-sm-10">
        <button type="submit" class="btn btn-primary">Sign up</button>
    </div>
</div>
</form>
    `
})

