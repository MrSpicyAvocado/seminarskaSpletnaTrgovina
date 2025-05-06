<!DOCTYPE html>
<html lang="en">
<?php include('tpl/head.php')?>
<body>
    <?php $activePage = substr($_SERVER["SCRIPT_NAME"],strrpos($_SERVER["SCRIPT_NAME"],"/")+1); ?>
    <?php include('tpl/header.php')?>
    <main>
        <div class="container">
            <section class="section-color"-->
                    <script>loadProductPage();</script>
                    <div class="row products"></div>
                </div>
            </section>
        </div>
    </main>
    <?php include('tpl/footer.php')?>
</body>
</html>