<!DOCTYPE html>
<html lang="en">
<?php include('tpl/head.php')?>
<body>
    <?php $activePage = substr($_SERVER["SCRIPT_NAME"],strrpos($_SERVER["SCRIPT_NAME"],"/")+1); ?>
    <?php include('tpl/header.php')?>
    <main>
        <div class="container">
            <section class="section-color contact">
                <div class="row">
                    <h1 class="fw-bold title">O trgovini</h1>
                    <div class="col-lg-7 col-md-12 col-sm-12">
                        <h3>Kje nas najdete in ostale informacije</h3>
                        <div class="row">
                            <div class="col-8">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.2409951231207!2d14.542621382357193!3d46.06623563592357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765326878383a53%3A0xe9ca70b7fdd0ec34!2sGr%C5%A1ka%20ulica%2C%201000%20Ljubljana!5e0!3m2!1ssl!2ssi!4v1683305521712!5m2!1ssl!2ssi" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div class="col-4">
                            <p><strong> PC Specialist d.o.o</strong><br><i class="fa-solid fa-location-dot icon-green"></i> Grška ulica 13<br><i class="fa-solid fa-envelopes-bulk icon-green"></i> 1000 Ljubljana<br><i class="fa-solid fa-globe icon-green"></i> Slovenija<br><i class="fa-solid fa-phone icon-green"></i> 031 333 333<br><strong> Delovni čas</strong><br><i class="bi bi-clock-fill icon-green"></i> Pon – Pet   08.30 – 17.00h</p></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-12 col-sm-12">
                        <h3>Kdo smo mi?</h3>
                        <p>Smo skupina študentov, smeri Računalništva in Spletnih tehnologij, ki smo s skupnimi močmi ustvarili spletno trgovino za računalniško opremo in komponente. Razlog, da smo si zbrali trgovino z računalniško opremo je bil, ker v naših izkušnjah brskanja po slovenskih spletnih trgovinah, je izbira izdelkov zelo majhna in cene v primerjavi s tujim trgom zelo visoka. To nam je dalo motivacijo, da skupaj ustvarimo spletno stran kjer bi našim sodržavljanom nudili možnost naročanja izdelkov brez skrbi.
                        </p>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col">
                        <h3>Kaj vam nudimo?</h3>
                        <p>Naša spletna stran je bila ustvarjena z namenom, da kupcem računalniške opreme in računalniških komponent omogočimo enostaven in informativen dostop do vseh možnih izdelkov. Povezali smo se z mnogimi mednarodnimi podjetij, da našim strankom zagotovimo konkurenčne cene izdelkov in velikega nabora artiklu.<br>
                        Z našim zavarovanjem vam tudi omogočimo, da v najslabšnem primeru okvare opreme in komponent lahko vrnete vaše naročila in vam jih zastonj zamenjamo. <br>
                        Za dostavo vaših naročil bo poskrbela Pošta Slovenije, v primeru, da pa ste mednarodna stranka pa imamo tudi podpisane pogodbe z GLS in DPD.<br>
                        Ponujamo vam tudi raznolike načine plačile (Kreditna kartica, Nakazila iz banke, PayPal, Nakazila iz Kripto denarnic in plačilo ob prejemu paketa z gottovino). 
                        </p>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col">
                        <h3>Katere Tehnologije smo uporabili?</h3>
                        <h4>HTML</h4>
                            <p>Osnova za grajenje spletnih strani HTML. S HTML smo ustvarjali osnovno strukturo naše spletne strani. V zgradbi smo začeli s headom kjer smo dali vse naše povezave do zunanjim knjižnic(bootstrap, less, jquerry, fontawesome, ...) in povezave do naših datotek, kjer smo shranili naše skripte, oblikovanje z lessom in slike. Body HTML datoteke smo razdelili na header, main in footer. V headerju je primarno naš navigacijski menu, v main smo vstavili vsebino naših strani, ki so potem še razdeljeni na manjše dive in sectione. V footerju smo pa še nakoncu dodali enostavnejšo obliko navigacije in povezavo do naših socialnih omrežij</p>
                        <h4>CSS</h4>
                            <p>S CSS smo lahko začeli v podrobno oblikovati naše osnove HTML elemente. Skoraj vsak element od celotnega bodija do najmanjše slike je na nek način preoblikovan s pomočjo CSSaja. Omogočil nam je natančnejšo pozicioniranje naših elementov, spreminjanje barv, fontov, velikosti in mnogo več grafičnih preoblikovanj. Pomagali smo si tudi z lessom, ki nam je olajšal delo v samem programiranju in pomagali smo si đe z Bootstrap ogrodjem, ki nam je omogčil enostavnejšo nastavljanje prilagodljivosti zaslona in uporabljami smo že v naprej ustvarjene elemnte kot so navbar in carousel, katere smo samo preuredili za naše namene.</p>
                        <h4>JavaScript</h4>
                            <p>Z JavaScriptom smo ustvarili skoraj vse dinamične elemente v naši spletni strani. S tem proramskim jezikom smo lahko brali naš JSON, v katerem so shranjeni naši podatki o izdelkih in blogu. Ustvarili smo lahko skripte, ki avtomatsko iz JSON datoteke prebere izdelke in jih dinamično vstavlja v našo spletno stran, in s pomočjo IDjem, ki smo jih dodali izdelkom spremeni strukturo spletne strani, da prikaže samo željeni izdelek. JS smo tudi uporabili kot orodje za kreiranje našega filtrirnega sistema.<p>
                        <h4>PHP</h4>
                            <p>Nazandnje smo še uporabljalii PHP, ki nam je primarno omogočil shranjenevanja header in footer elementov v eni datoteki in s funkcijo inlude vstaviti datoteko v vsako stran posebaj. To nam je omogočilo veliko enostavnejše spreminjanje in urejanje elementov, ki so prisotni na vsaki strani.</p>
                            
                    </div>
                </div>
            </section>
        </div>
    </main>
    <?php include('tpl/footer.php')?>
</body>
</html>