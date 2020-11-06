<template>
  <header class="header">
    <div class="container-grid">
      <nav class="main-nav">

        <div class="menu-btn">
          <div class="menu-btn-burger"></div>
        </div>

        <div class="logo">
          <h2>logo</h2>
        </div>
        <ul class="main-menu">
          <li id="register-btn-mobile">
            <button class="btn-register-system"><p>ورود</p></button>
            <button class="btn-register-system"><p>ثبت نام</p></button>
          </li>

          <li><a href="#">خانه</a></li>

          <li class="nav-link"><a href="#">محصولات ما <i class="fal fa-angle-down"></i></a>
            <div class="dropdown">
              <ul>
                <li class="dropdown-link"><a href="">عسل</a></li>
                <li class="dropdown-link"><a href="">بره موم</a></li>
                <li class="dropdown-link"><a href="">گرده گل</a></li>
              </ul>
            </div>
          </li>
          <li class="nav-link"><a href="#">برنج </a></li>
          <li class="nav-link"><a href="#">مطالب </a></li>
          <li class="nav-link"><a href="#">درباره ما </a></li>
          <li class="nav-link"><a href="#">تماس باما </a></li>
        </ul>

        <ul class="right-menu">
          <li>
            <a href="#"><i class="fal fa-search fa-rotate-90"></i></a>
          </li>

          <li>
            <a href="#"><i class="fal fa-shopping-bag"></i></a>
          </li>

          <li>
            <button class="btn-register-system">ورود</button>
            <button class="btn-register-system">ثبت نام</button>
          </li>
        </ul>
      </nav>

    </div>
  </header>

</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>