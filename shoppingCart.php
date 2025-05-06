<!DOCTYPE html>
<html lang="en">
<?php include('tpl/head.php')?>
<body>
    <?php $activePage = substr($_SERVER["SCRIPT_NAME"],strrpos($_SERVER["SCRIPT_NAME"],"/")+1); ?>
    <?php include('tpl/header.php')?>
    <main>
    <section>
    <div class="container shoppingCart">
            <div class="row mt-5">
                <div class="col-lg-9">
                    <div class="card border shadow-0 cartForm-color">
                        <div class="m-4">
                            <h4 class="card-title mb-4">Košarica</h4>
                            <script>loadCartArticles();</script>
                            <div class="cartArticles"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card mb-3 border shadow-0 cartForm-color">
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <label class="form-label">Imate kodo za popust ali darilni bon?</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control border rounded-0" id="discountCode" placeholder="Vnesi kodo" />
                                        <button class="btn btn-light border rounded-0" onclick="return cartDiscountCode(document.getElementById('discountCode'))">Uporabi</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="card shadow-0 border cartForm-color">
                        <div class="card-body">
                            <div class="cartPrice"></div>
                            <div class="mt-3">
                                <button class="btn btn-buy w-100 shadow-0 mb-2 rounded-0" onclick="return cartBuyItems()">Kupi</button>
                                <a href="products.php" class="btn btn-light w-100 border mt-2 rounded-0"> Nazaj v trgovino </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </main>
    <?php include('tpl/footer.php')?>
</body>
</html>