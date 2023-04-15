<script>
import { mapActions } from 'pinia';
import { useAppStore } from '../stores/app';


export default {

}
</script>
<template >
    <div>
        <!-- ======= Sidebar ======= -->
        <aside id="sidebar" class="sidebar">

            <ul class="sidebar-nav" id="sidebar-nav">


                <li class="nav-item">
                    <a class="nav-link " @click.prevent="$router.push('/')" href="">
                        <i class="bi bi-car-front"></i>
                        <span>Products</span>
                    </a>
                </li><!-- End Dashboard Nav -->
            </ul>

        </aside><!-- End Sidebar-->
    </div>
</template>
<style ></style>