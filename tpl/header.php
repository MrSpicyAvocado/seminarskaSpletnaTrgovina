<header>
    <nav class="navbar navbar-expand-custom navbar-header">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="index.php">
                    <img src="img/logo.png" alt="..." height="97" class="d-inline-block">
                </a>
            </div>
            <button class="navbar-toggler sm-auto" type="button" data-bs-toggle="collapse" data-bs-target="#n_bar" aria-expanded="true" aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="n_bar">
                <ul class="navbar-nav">
                    <?php
                        include('menu.php');
                        foreach($links as $key => $link){
                            $isActive = ($activePage == $link['link']) ? 'active':'';
                            echo '<li class="nav-item"><a class="nav-link navbar-header-font '.$isActive.'" href="'.$link['link'].'">'.$link['title'].'</a></li>';
                        }
                    ?>
                    <li class="nav-item nav-search">
                        <div class="input-group">
                            <input type="search" id="searchBar" class="form-control border-0 shadow-none" placeholder="Iskanje" aria-label="Search" aria-describedby="search-addon" onkeyup="searchOnEnter(event)">
                            <button class="btn nav-btn-search" type="submit" onclick="searchButton()"><i class="bi bi-search"></i></button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <?php
        include('productMenu.php');
        if($activePage == "products.php"){
           echo '<nav class="product-menu"><ul>';
           foreach($linksProductMenu as $key => $link){
                if(count($link['sub']) > 0){
                    echo '<li><a href="'.$link['link'].'">'.$link['title'].'</a>';
                    echo '<ul class="dropdown">';
                    foreach($link['sub'] as $key => $sub){
                        echo '<li><a href="'.$sub['link'].'">'.$sub['title'].'</a></li>';
                    }
                    echo '</ul>';
                    echo '</li>';
                }else{
                    echo '<li><a href="'.$link['link'].'">'.$link['title'].'</a></li>';
                }
            }
           echo '</ul></nav">'; 
        }
    ?>
</header>
<script>
    updateCartItemNumber();
</script>