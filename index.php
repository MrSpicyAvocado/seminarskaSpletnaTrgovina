<!DOCTYPE html>
<html lang="en">
<?php include('tpl/head.php')?>
<body>
    <?php $activePage = substr($_SERVER["SCRIPT_NAME"],strrpos($_SERVER["SCRIPT_NAME"],"/")+1); ?>
    <?php include('tpl/header.php')?>
    <main>
        <!-- Carousel -->
        <section>
            <div id="carouselFadeTransition" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <a href="products.php?articleID=151">
                            <img src="img/carousel/carousel1.jpg" class="d-block w-100" alt="...">
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a href="products.php?articleID=155">
                            <img src="img/carousel/carousel2.jpg" class="d-block w-100" alt="...">
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a href="products.php?articleID=154">
                            <img src="img/carousel/carousel3.jpg" class="d-block w-100" alt="...">
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a href="products.php?articleID=153">
                            <img src="img/carousel/carousel5.jpg" class="d-block w-100" alt="...">
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a href="products.php?articleID=152">
                            <img src="img/carousel/carousel6.jpg" class="d-block w-100" alt="...">
                        </a>
                    </div>
                    
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselFadeTransition" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselFadeTransition" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <a href="https://app.leanpay.si/vendor/pre-qualified?vendor=3ern7e" target="_self">
                <img class="w-100" loading="lazy" src="img/under-carousel.jpg" alt="" title="">
            </a>
        </section>
        <div class="container">
            <!-- Najbolj prodajano -->
            <section class="section-color">
                <h1 class="fw-bold title text-center">NAJBOLJ PRODAJANO</h1>
                <script>loadBestSellers();</script>
                <div class="row productsBestSeller"></div>
            </section>
            <!-- Blog -->
            <section>
                <h1 class="fw-bold title text-center">BLOG</h1>
                <script>loadLastSixBlogPosts();</script>
                <div class="row lastSixBlogPosts"></div>
            </section>
            <!-- Dodatna sekcija :D -->
            <section class="section-color mb-3">
                <h1 class="fw-bold title text-center">Naši partnerji</h1>
                <div class="container text-center my-3">
                    <div class="row mx-auto my-auto justify-content-center">
                        <div id="recipeCarousel" class="carousel slide partnerLogotips" data-bs-ride="carousel">
                            <div class="carousel-inner" role="listbox">
                                <div class="carousel-item active partnerLogotip">
                                    <div class="col-md-3">
                                        <div class="card card-recipeCarousel">
                                            <div class="card-img">
                                                <img src="https://cdn.mobistekla.si/images/izbira-znamke/asus-logo.png" class="img-fluid img-fluid-partnerLogotips">
                                            </div>
                                            <div class="card-img-overlay"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item partnerLogotip">
                                    <div class="col-md-3">
                                        <div class="card card-recipeCarousel">
                                            <div class="card-img">
                                                <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/2/21/Nvidia_logo.svg/2560px-Nvidia_logo.svg.png" class="img-fluid img-fluid-partnerLogotips">
                                            </div>
                                            <div class="card-img-overlay"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item partnerLogotip">
                                    <div class="col-md-3">
                                        <div class="card card-recipeCarousel">
                                            <div class="card-img">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/1005px-Intel_logo_%282006-2020%29.svg.png" class="img-fluid img-fluid-partnerLogotips">
                                            </div>
                                            <div class="card-img-overlay"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item partnerLogotip">
                                    <div class="col-md-3">
                                        <div class="card card-recipeCarousel">
                                            <div class="card-img">
                                                <img src="https://cwsmgmt.corsair.com/press/CORSAIRLogo2020_stack_K.png" class="img-fluid img-fluid-partnerLogotips">
                                            </div>
                                            <div class="card-img-overlay"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item partnerLogotip">
                                    <div class="col-md-3">
                                        <div class="card card-recipeCarousel">
                                            <div class="card-img">
                                                <img src="https://logos-world.net/wp-content/uploads/2020/03/AMD-Symbol.png" class="img-fluid img-fluid-partnerLogotips">
                                            </div>
                                            <div class="card-img-overlay"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item partnerLogotip">
                                    <div class="col-md-3">
                                        <div class="card card-recipeCarousel">
                                            <div class="card-img">
                                                <img src="https://1000logos.net/wp-content/uploads/2018/10/MSI-Logo-2011.png" class="img-fluid img-fluid-partnerLogotips">
                                            </div>
                                            <div class="card-img-overlay"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <script>
                        partnerLogotips();
                    </script>
            </section>
        </div>
    </main>
    <?php include('tpl/footer.php')?>
</body>
</html>