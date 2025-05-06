<!DOCTYPE html>
<html lang="en">
<?php include('tpl/head.php')?>
<body>
    <?php $activePage = substr($_SERVER["SCRIPT_NAME"],strrpos($_SERVER["SCRIPT_NAME"],"/")+1); ?>
    <?php include('tpl/header.php')?>
    <?php
        $outputAlert = null;
        
        function checkInputField($Name, $Type = 'text'){
            $output = null;
            $output = (isset($_POST) && isset($_POST[$Name])) ? $_POST[$Name] : null;
        
            if($Type == 'number'){
                $output = (is_numeric($output)) ? $output : null;
            }
        
            return $output;
        }

        function createErrorMessage($array, $type){
            $outputError = null;
            $dolzinaArraya = count($array);
            if($dolzinaArraya == 1){
                $outputError .= "polje ".$array[0].(($type == 'empty')?' je obvezno!':' je napačno vnešeno!');
            }else if($dolzinaArraya == 2){
                $outputError .= " polji ".$array[0]." in ".$array[1].(($type == 'empty')?' sta obvezni!':' sta napačno vnešeni!');
            }else if($dolzinaArraya != 0){
                $outputError .= " polja ";
                for($i = 0; $i < $dolzinaArraya; $i++){
                    if($i == $dolzinaArraya-1){
                        $outputError .= $array[$i]." ";
                    }else{
                        if($i+1 == $dolzinaArraya-1){
                            $outputError .= $array[$i]." in ";
                        }else{
                            $outputError .= $array[$i].", ";
                        }
                    }
                }
                $outputError .= (($type == 'empty')?'so obvezna!':'so napačno vnešeno!');
            }
            return $outputError;
        }

        function checkFormAlert(){
            $nameSurname = checkInputField('nameSurname');
            $email = checkInputField('email');
            $phone = checkInputField('phone', 'number');
            $message = checkInputField('message');
            $company = checkInputField('company');

            $outputAlert = null;
            $arrayEmpty = [];
            $arrayError = [];
            //name surname check
            if(!$nameSurname){
                array_push($arrayEmpty, "Ime in priimek");
            }else if(!preg_match("/^[a-žA-Ž ]*$/", $_POST["nameSurname"])){
                array_push($arrayError, "Ime in priimek");
            } 
            //company check
            if(!$company){
                array_push($arrayEmpty, "Podjetje");
            }else if(!preg_match("/^[a-žA-Ž ]*$/", $_POST["company"])){
                array_push($arrayError, "Podjetje");
            } 
            //email check
            if(!$email){
                array_push($arrayEmpty, "Email");
            }else if(!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/", $_POST["email"])){
                array_push($arrayError, "Email");
            } 
            //phone check
            if(!$phone){
                array_push($arrayEmpty, "Telefon");
            }else if(strlen($_POST["phone"]) != 9){
                array_push($arrayError, "Telefon (9 številk)");
            } 
            //message check
            if(!$message){
                array_push($arrayEmpty, "Sporočilo");
            }
            //ERROR
            if(!$nameSurname || !$email || !$phone || !$message || !$company){
                $outputAlert .= '<li>'.createErrorMessage($arrayEmpty, 'empty').'</li>';
                $outputAlert .= '<li>'.createErrorMessage($arrayError, 'error').'</li>';
                $outputAlert = '<div class="alert alert-danger" role="alert"><ul>'.$outputAlert.'</ul></div>';
            }
            //SUCCESS
            if(!$outputAlert){
                $outputAlert = '<div class="alert alert-success" role="alert">Vaše povpraševanje je uspešno poslano!</div>';
            }
            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                return $outputAlert;
            }
        }
    ?>
    <main>
        <div class="container contact">
            <section class="section-color contact">
                <h1 class="fw-bold title">KONTAKT</h1>
                <h2 class="mt-3 mb-1">PC Specialist kontakt, naslov in ostale informacije</h2>
                <div class="row">
                    <div class="col-md-4">
                        <h5><strong> PC Specialist d.o.o</strong><br><i class="fa-solid fa-location-dot icon-green"></i> Grška ulica 13<br><i class="fa-solid fa-envelopes-bulk icon-green"></i> 1000 Ljubljana<br><i class="fa-solid fa-globe icon-green"></i> Slovenija</h5>
                    </div>
                    <div class="col-md-4">
                        <h5><strong> Telefonska številka</strong><br><i class="fa-solid fa-phone icon-green"></i> 031 333 333</p></h5>
                    </div>
                    <div class="col-md-4">
                        <h5><strong> Delovni čas</strong><br><i class="bi bi-clock-fill icon-green"></i> Pon – Pet   08.30 – 17.00h</p></h5>
                    </div>
                </div>
                <h2 class="mt-4 mb-1">Kontaktni obrazec:</h2>
                <form method="post">
                    <?php echo(checkFormAlert()) ? checkFormAlert() : null; ?>
                    <div class="row">
                        <div class="col-md-6">
                            <label for="nameSurname" class="form-label">Ime in priimek:</label>
                            <input type="text" class="form-control rounded-0" name="nameSurname" id="nameSurname" placeholder="Vnesite vaše ime in priimek...">
                        </div>
                        <div class="col-md-6">
                            <label for="company" class="form-label">Podjetje</label>
                            <input type="company" class="form-control rounded-0" name="company" id="company" placeholder="Vnesite ime vašega podjetja...">
                        </div>
                        <div class="col-md-6">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control rounded-0" name="email" id="email" placeholder="Vnesite vaš e-mail...">
                        </div>
                        <div class="col-md-6">
                            <label for="phone" class="form-label">Telefon</label>
                            <input type="tel" class="form-control rounded-0" name="phone" id="phone" placeholder="Vnesite telefonsko številko... 090123123">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <label for="message" class="form-label">Sporočilo</label>
                            <textarea type="text" class="form-control rounded-0" name="message" id="message" placeholder="Sporočilo.."></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 text-end">
                            <input type="submit" class="btn btn-contact mb-1" value="Pošlji"></input>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    </main>
    <?php include('tpl/footer.php')?>
</body>
</html>