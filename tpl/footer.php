<footer class="pt-4 footer">
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-6 col-md-2 mb-3">
                <h5>Povezave</h5>
                <ul class="nav flex-column">
                <?php
                    include('menu.php');
                    foreach($links as $key => $link){
                        if($link['link'] != 'shoppingCart.php'){
                            echo '<li class="nav-item mb-2"><a href="'.$link['link'].'" class="nav-link p-0 text-body-secondary">'.$link['title'].'</a></li>';
                        }
                    }
                ?>
                </ul>
            </div>

            <div class="col-6 col-md-2 mb-3">
                <h5>Člani skupine</h5>
                <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Aljaž Veršnik</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Luka Bezamovski</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Boban Božić</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Vedad Halilagić</a></li>
                </ul>
            </div>
        </div>
        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 border-top m-0">
            <p>© 2023 Company, Inc. All rights reserved.</p>
            <ul class="list-unstyled d-flex">
                <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="bi bi-twitter"></i></li>
                <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="bi bi-instagram"></i></li>
                <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="bi bi-facebook"></i></a></li>
            </ul>
        </div>
    </div>
  </footer>