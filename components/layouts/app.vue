<template>
    <!-- Navbar-->
    <div>

        <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-sm-top" style="position:relative; z-index:2;">
            <div class="container-fluid justify-content-between">
                <!-- Left elements -->
                <div class="d-flex">
                <!-- Brand -->
                    <a class="navbar-brand me-1 mb-0 d-flex align-items-center" href="#">
                        <img
                        src="/img/glo.png"
                        height="50"
                        alt="MDB Logo"
                        loading="lazy"
                        style="margin-top: 1px;"
                        />
                        <span class="w-75 fs-4 fw-semibold text-success text-center d-none d-sm-flex me-2">Cribs.ng</span> 
                    </a>

                    <!-- Search form -->
                    <!-- <form class="input-group w-auto my-auto d-none d-sm-flex">
                        <input
                        autocomplete="off"
                        type="search"
                        class="form-control rounded"
                        placeholder="Search"
                        style="min-width: 125px;"
                        />
                        <span class="input-group-text border-0 d-none d-lg-flex"
                        ><i class="fas fa-search"></i
                        ></span>
                    </form> -->
                </div>
                
                <!-- Left elements -->

                <!-- Center elements -->
                <div class="d-flex d-none d-sm-flex">   
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul class="navbar-nav flex-row d-md-flex">
                            <li class="nav-item dropdown">
                                <a 
                                    class="nav-link dropdown-toggle text-uppercase font-weight-bold hover-overlay hidden-arrow" 
                                    href="#" 
                                    id="navbarDarkDropdownMenuLink" 
                                    role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                    style="height:41px; margin-top:5px; box-shadow:none; text-decoration: none; font-size:13px; margin-left:10px; background-color: none; padding: 10px; border-radius: 5px; cursor: pointer;"
                                    @click="toggle(1)"
                                >
                                    Listings
                                    <!-- <i class="icon fa fa-chevron-down" aria-hidden="true"></i> -->
                                    <!-- <i class="icon fa fa-space-shuttle" aria-hidden="true"></i> -->
                                    <DropDown class=" icon fa fa-space-shuttle"/>
                                </a>
                                <!-- <ul class="dropdown-menu dropdown-menu-lg-end animate__animated animate__fadeInUp" aria-labelledby="navbarDarkDropdownMenuLink" style="padding:0px; border-radius:3px; width:20px;">
                                    <li><a class="dropdown-item fw-semibold text-secondary " href="#">Shortlet</a></li>
                                    <li><a class="dropdown-item fw-semibold text-secondary" href="#">ShortLet Luxury</a></li>
                                    <li><a class="dropdown-item fw-semibold text-secondary" href="#">Long Term Rental</a></li>
                                </ul> -->
                                <ul class="dropping cancel animate__animated animate__fadeInUp">
                                    <li><a class="drop-list fw-semibold text-secondary " href="#" style="text-decoration:none;">Shortlet</a></li>
                                    <li><a class="drop-list fw-semibold text-secondary" href="#" style="text-decoration:none;">ShortLet Luxury</a></li>
                                    <li><a class="drop-list fw-semibold text-secondary" href="#" style="text-decoration:none;">Long Term Rental</a></li>
                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a 
                                    class="nav-link dropdown-toggle text-uppercase font-weight-bold hover-overlay hidden-arrow" 
                                    href="#" 
                                    id="navbarDarkDropdownMenuLink" 
                                    role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                    style="height:41px; margin-top:5px; box-shadow:none; text-decoration: none; font-size:13px; margin-left:10px; background-color: none; padding: 10px; border-radius: 5px; cursor: pointer;"
                                    @click="toggle(2)"
                                >
                                    Our Project
                                    <!-- <i class="icons fa fa-chevron-down" aria-hidden="true"></i> -->
                                    <!-- <i class="icons fa fa-space-shuttle" aria-hidden="true"></i> -->
                                    <DropDown class="icons fa fa-space-shuttle"/>
                                </a>
                                <!-- <ul class="dropdown-menu dropdown-menu-lg-end animate__animated animate__fadeInUp" aria-labelledby="navbarDarkDropdownMenuLink" style="padding:0px; border-radius:3px; width:20px;">
                                    <li><a class="dropdown-item fw-semibold text-secondary " href="#">Lands</a></li>
                                    <li><a class="dropdown-item fw-semibold text-secondary" href="#">Property</a></li>
                                    <li><a class="dropdown-item fw-semibold text-secondary" href="#">Metaverse Land</a></li>
                                </ul> -->
                                <ul class="spacing cancel animate__animated animate__fadeInUp">
                                    <li><a class="drop-list fw-semibold text-secondary " href="#" style="text-decoration:none;">Lands</a></li>
                                    <li><a class="drop-list fw-semibold text-secondary" href="#" style="text-decoration:none;">Property</a></li>
                                    <li><a class="drop-list fw-semibold text-secondary" href="#" style="text-decoration:none;">Metaverse Land</a></li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a 
                                    class="nav-link text-uppercase font-weight-bold hover-overlay w-100" 
                                    href="#" 
                                    aria-expanded="false"
                                    style="width:100px; height:41px; margin-top:5px; box-shadow:none; text-decoration: none; font-size:13px; margin-left:10px; background-color: none; padding: 10px; border-radius: 5px; cursor: pointer;"
                                    
                                >
                                    <span>Become a Host </span>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a 
                                    class="nav-link text-uppercase font-weight-bold hover-overlay w-100" 
                                    href="#" 
                                    aria-expanded="false"
                                    style="width:100px; height:41px; margin-top:5px; box-shadow:none; text-decoration: none; font-size:13px; margin-left:10px; background-color: none; padding: 10px; border-radius: 5px; cursor: pointer;"
                                    
                                >
                                    <span>Fund Your Project</span>
                                </a>
                            </li>

                            <li class="nav-item dropdown">
                                <a 
                                    class="nav-link dropdown-toggle text-uppercase font-weight-bold hover-overlay hidden-arrow" 
                                    href="#" 
                                    id="navbarDarkDropdownMenuLink" 
                                    role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                    style="height:41px; margin-top:5px; box-shadow:none; text-decoration: none; font-size:13px; margin-left:10px; background-color: none; padding: 10px; border-radius: 5px; cursor: pointer;"
                                    @click="toggle(3)"
                                >
                                    About Us
                                    <!-- <i class="iconic fa fa-chevron-down" aria-hidden="true"></i> -->
                                    <!-- <i class="iconic fa fa-space-shuttle" aria-hidden="true"></i> -->
                                    <DropDown class="iconic fa fa-space-shuttle"/>
                                </a>
                                <ul class="staging cancel animate__animated animate__fadeInUp">
                                    <li><a class="drop-list fw-semibold text-secondary " href="#" style="text-decoration:none;">Contact Us</a></li>
                                    <li>
                                        <a 
                                            class="drop-list fw-semibold text-secondary iniquiry" 
                                            style="text-decoration:none;"
                                            href="#"
                                            id="dropdownMenuButton1"
                                        >
                                            Make Inquiry
                                            <i class=" fa fa-chevron-right" aria-hidden="true" style="position:relative; left: 10px; height:100%; font-size: 13px;"></i>
                                        </a>   

                                        <ul class="super">
                                            <li><a class="drop-list fw-semibold text-secondary" href="#" style="text-decoration:none;">Crib Care</a></li>
                                            <li><a class="drop-list fw-semibold text-secondary" href="#" style="text-decoration:none;">FAQ's</a></li>
                                            <li><a class="drop-list fw-semibold text-secondary" href="#" style="text-decoration:none;">Blog</a></li>
                                            <li><a class="drop-list fw-semibold text-secondary" href="#" style="text-decoration:none;">Privacy Policy</a></li>
                                            <li><a class="drop-list fw-semibold text-secondary" href="#" style="text-decoration:none;">Client Service</a></li>
                                        </ul>
                                    </li>
                                    
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Center elements -->

                <!-- Right elements -->
                <ul class="navbar-nav flex-row d-flex d-sm-none d-lg-flex">
                    <li class="nav-item me-3 me-lg-1 dropdown">
                        <a 
                            class="nav-link dropdown-toggle hover-overlay hidden-arrow d-none d-sm-none d-lg-flex d-xs-none align-items-sm-center" 
                            href="#" 
                            style="border-radius: 50px; border: 1px solid green;"
                            id="navbarDarkDropdownMenuLink" 
                            role="button" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false"
                            
                        >
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                                class="rounded-circle d-none d-sm-none d-lg-flex d-xs-none"
                                height="30"
                                alt="Black and White Portrait of a Man"
                                loading="lazy"
                            />
                                <strong 
                                class="d-none d-sm-none d-lg-flex d-xs-none ms-4"
                                style="margin-left: -10px; box-shadow:none; text-decoration: none; font-size:15px; background-color: none; cursor: pointer;"
                                >
                                    James Bond
                                </strong>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-lg-end animate__animated animate__fadeInUp" aria-labelledby="navbarDarkDropdownMenuLink" style="width:20px;">
                            <li><button class="dropdown-item fw-semibold text-secondary" type="button"><i class="fa fa-user me-4" aria-hidden="true"></i>My Profile</button></li>
                            <li><button class="dropdown-item fw-semibold text-secondary" type="button"><i class="fa fa-cog me-4" aria-hidden="true"></i>Setting</button></li>
                            <!-- <li class="w-100 d-flex flex-wrap bg-primary" style="height:30px;">
                                <button class="dropdown-item fw-semibold text-secondary d-flex col" type="button">
                                    <i class="fa fa-heart me-4" aria-hidden="true"></i>
                                    <span class="d-flex flex-wrap" >Favourite Properties</span> 
                                </button>
                            </li> -->
                            <li><hr class="dropdown-divider"></li>
                            <li><button class="dropdown-item fw-semibold text-secondary" type="button"><i class="fa fa-sign-out me-4" aria-hidden="true"></i>Log Out</button></li>
                        </ul>
                    </li>
                </ul>

                <ul class="navbar-nav flex-row d-flex d-sm-none d-lg-flex">
                    <!-- <button
                        class="navbar-toggler text-success"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                    </button> -->
                    <li class="nav-item me-3 me-lg-1 d-none d-sm-flex">
                        <a   
                            class="text-success text-uppercase fw-semibold hover-overlay px-4 p-2"
                            style="height:41px; margin-top:5px; box-shadow:none; text-decoration: none; font-size:13px; margin-left:10px; background-color: none; padding: 10px; cursor: pointer;"
                        >
                            Login
                        </a>
                        <button 
                            type="button" 
                            class="btn btn-success text-light text-uppercase fw-semibold hover-overlay px-5 p-2 me-3"
                            style="height:41px; margin-top:5px; box-shadow:none; text-decoration: none; font-size:13px; margin-left:10px; background-color: none; padding: 10px; cursor: pointer;"
                        >
                            Register
                        </button>
                    </li>
                </ul>

                <button 
                    type="button" 
                    class="text-success menu-toggle d-flex d-lg-none d-sm-flex d-md-flex d-xs-flex d-xl-none flex-column justify-content-end" id="mobile-menu" 
                    style="cursor:pointer"
                    @click="toggleBackDrop()"
                >
                    <!-- <span class="bar">---</span>
                    <span class="bar"></span> -->
                    <span class="bar">
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </span>
                   
                </button>
            </div>
        </nav>

        <!-- Right elements -->
        <div  class="backdrop d-sm-block d-lg-none d-md-block d-xs-block d-xl-none" >

            <div class="modal-header d-sm-block d-lg-none d-md-block d-xs-block d-xl-none row bg-white" style="position:relative; border-radius: 10px; margin:10px; z-index:99;">
                <div class="modal-content-header d-flex justify-content-between">
                    <a class="navbar-brand me-1 mb-3 d-flex align-items-center" href="#">
                        <img
                        src="/img/glo.png"
                        height="50"
                        alt="MDB Logo"
                        loading="lazy"
                        style="margin-top: -15px;"
                        />
                    </a>
                    <div class="brand" style="margin-top: -5px; cursor:pointer;" >
                        <i class="text-success fa fa-times fs-1" aria-hidden="true" @click="toggleBackDrop()"></i>
                    </div>
                </div>
                <ul class="navbar-nav d-flex">
                    <li class="nav-item" style=" cursor:pointer;" @click="toggleIcon(1)">
                        <div class="d-flex justify-content-between">
                            <a 
                                class="nav-link text-uppercase fw-semibold hover-overlay hidden-arrow" 
                                href="#" 
                                style="margin-top:3px; box-shadow:none; text-decoration: none; font-size:13px; margin-left:10px; background-color: none; cursor: pointer;"
                            >
                                Listings
                            </a>
                            <span class="mt-2" v-if="iconToggle.isIcon">
                                <i class="fa fa-minus text-success" aria-hidden="true"></i>
                            </span>
                            <span class="mt-2" v-else>
                            <i class="fa fa-plus text-success" aria-hidden="true"></i> 
                            </span>
                        </div>
                        <ul class="box cancel" style="padding:0px; border-radius:3px; width:20px; list-style:none;">
                            <li><a class="dropdown-item fw-semibold text-secondary bg-white" href="#">ShortLet</a></li>
                            <li><a class="dropdown-item fw-semibold text-secondary bg-white" href="#">ShortLet Luxury</a></li>
                            <li><a class="dropdown-item fw-semibold text-secondary bg-white" href="#">Long Term Rental</a></li>
                        </ul>
                    </li>

                    <li class="nav-item" style=" cursor:pointer;" @click="toggleIcon(2)">
                        <div class="d-flex justify-content-between">
                            <a 
                                class="nav-link text-uppercase fw-semibold hover-overlay hidden-arrow" 
                                href="#" 
                                style="margin-top:3px; box-shadow:none; text-decoration: none; font-size:13px; margin-left:10px; background-color: none; cursor: pointer;"
                            >
                                Our Project
                            </a>
                            <span class="mt-2" v-if="iconToggle.isIcons">
                                <i class="fa fa-minus text-success" aria-hidden="true"></i>
                            </span>
                            <span class="mt-2" v-else>
                            <i class="fa fa-plus text-success" aria-hidden="true"></i> 
                            </span>
                        </div>
                        <ul class="square cancel" style="padding:0px; border-radius:3px; width:20px; list-style:none;">
                            <li><a class="dropdown-item fw-semibold text-secondary bg-white" href="#">Lands</a></li>
                            <li><a class="dropdown-item fw-semibold text-secondary bg-white" href="#">Property</a></li>
                            <li><a class="dropdown-item fw-semibold text-secondary bg-white" href="#">Metaverse Land</a></li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <a 
                            class="nav-link text-uppercase fw-semibold hover-overlay hidden-arrow" 
                            href="#" 
                            style="margin-top:3px; box-shadow:none; text-decoration: none; font-size:13px; margin-left:10px; background-color: none; cursor: pointer;"
                        >
                            <span>Become a Host </span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a 
                            class="nav-link text-uppercase fw-semibold hover-overlay hidden-arrow" 
                            href="#" 
                            style="margin-top:3px; box-shadow:none; text-decoration: none; font-size:13px; margin-left:10px; background-color: none; cursor: pointer;"
                        >
                            <span>Fund Your Project </span>
                        </a>
                    </li>
                    <li class="nav-item" style=" cursor:pointer;">
                        <div class="d-flex justify-content-between" @click="toggleIcon(3)">
                            <a 
                                class="nav-link text-uppercase fw-semibold hover-overlay hidden-arrow" 
                                href="#" 
                                style="margin-top:3px; box-shadow:none; text-decoration: none; font-size:13px; margin-left:10px; background-color: none; cursor: pointer;"
                            >
                                About Us
                            </a>
                            <span class="mt-2" v-if="iconToggle.isIconic">
                                <i class="fa fa-minus text-success" aria-hidden="true"></i>
                            </span>
                            <span class="mt-2" v-else>
                            <i class="fa fa-plus text-success" aria-hidden="true"></i> 
                            </span>
                        </div>
                        <ul class="triangle cancel" style="padding:0px; border-radius:3px; width:20px; list-style:none;">
                            <li>
                                <a class="dropdown-item fw-semibold text-secondary bg-white" href="#">
                                    Contact Us
                                </a>
                            </li>
                            
                            <li class="open" style="padding:0px; border-radius:3px; list-style:none;" @click="inquiryToggle()">
                                
                                <div class="d-flex justify-content-between">
                                    <a class="dropdown-item fw-semibold text-secondary bg-white" href="#" >
                                        Make Inquiry
                                    </a>

                                    <span class="mt-2" v-if="iconToggle.isIconListings" style="position: relative; left: 610px;">
                                        <i class="fa fa-minus text-success" aria-hidden="true"></i>
                                    </span>
                                    <span class="mt-2" v-else style="position: relative; left:610px;">
                                        <i class="fa fa-plus text-success" aria-hidden="true"></i> 
                                    </span>
                                </div>

                                <ul class="circular cancel" style="padding:0px; border-radius:3px; width:20px; list-style:none;">
                                    <li><a class="dropdown-item fw-semibold text-secondary bg-white ms-4" href="#">Crib Care</a></li>
                                    <li><a class="dropdown-item fw-semibold text-secondary bg-white ms-4" href="#">FAQ's</a></li>
                                    <li><a class="dropdown-item fw-semibold text-secondary bg-white ms-4" href="#">Blog</a></li>
                                    <li><a class="dropdown-item fw-semibold text-secondary bg-white ms-4" href="#">Privacy Policy</a></li>
                                    <li><a class="dropdown-item fw-semibold text-secondary bg-white ms-4" href="#">Client Service</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="container">
                    <div class="mt-4 d-flex row justify-content-between">
                        <button type="button" class="btn btn-gray text-success fw-semibold col-4" style=" border:1px solid white; border-radius: 10px;">Login</button>
                        <button type="button" class="btn btn-success text-white fw-semibold col-5" style=" border-radius: 10px;">Register</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


<!-- Navbar -->
</template>

<script>
import NuxtLogo from "@/components/NuxtLogo.vue";
import ChevronDown from "@/components/feather-icons/chevron-down.vue";
import ChevronRight from "@/components/feather-icons/chevron-right.vue";
import DropDown from "@/components/feather-icons/drop-down.vue"

export default {
    // name: app-layout,
    components:{
        "Tutorials": () => import("@/components/Tutorial.vue"),
        NuxtLogo, ChevronDown, ChevronRight, DropDown,
    },
    data:()=> ({
        imageLoading: true,
        listing:false,
        listingTwo:false,
        listingThree:false,
        listingToggle: true,
        lastToggle: true,
        dropdownToggle:{
            firstClass: false,
            secondClass: false,
            thirdClass: false,
        },
        iconToggle:{
            isIcon: false,
            isIcons: false,
            isIconic: false,
            isIconListings:false,
        },

    }),
    methods: {
        toggle(index){
            var div = document.querySelector('.nav-link');
            var icon = document.querySelector('.icon');
            var icons = document.querySelector('.icons');
            var iconic = document.querySelector('.iconic');
            var dropOne = document.querySelector(".dropping")
            var spaceOne = document.querySelector(".spacing")
            var stageOne = document.querySelector(".staging")

            // console.log("innocent......", this.listing)
            

            if(index === 1){
                this.dropdownToggle.firstClass = true;
                this.dropdownToggle.secondClass = false;
                this.dropdownToggle.thirdClass = false;
            }

            if(index === 2){
                this.dropdownToggle.firstClass = false;
                this.dropdownToggle.secondClass = true;
                this.dropdownToggle.thirdClass = false;
            }

            if(index === 3){
                this.dropdownToggle.firstClass = false;
                this.dropdownToggle.secondClass = false;
                this.dropdownToggle.thirdClass = true;
            }

            if(this.dropdownToggle.firstClass === true){
                icon.classList.add('active');
                icons.classList.remove('active');
                icons.classList.add('stop');
                iconic.classList.remove('active');
                iconic.classList.add('stop');
                dropOne.classList.remove('cancel');
                dropOne.classList.add('open');
                spaceOne.classList.remove('open');
                spaceOne.classList.add('cancel');
                stageOne.classList.remove('open');
                stageOne.classList.add('cancel');

                if(this.listing){
                    icon.classList.add('active');
                    icon.classList.remove('stop');
                    dropOne.classList.remove('cancel');
                    dropOne.classList.add('open');
                    console.log("----------------")
                    console.log("....how", this.listing)
                }
                this.listing = !this.listing;
                 console.log("================")
                console.log("timing", this.listing)
                 console.log("================")
                if(!this.listing){
                    icon.classList.add('stop');
                    icon.classList.remove('active');
                    dropOne.classList.remove('open');
                    dropOne.classList.add('cancel');
                    console.log("....style", this.listing)
                    console.log("----------------")
                }
                this.listing = !this.listing;
            } 

            if(this.dropdownToggle.secondClass === true){
                icons.classList.add('active');
                icon.classList.remove('active');
                icon.classList.add('stop');
                iconic.classList.remove('active');
                iconic.classList.add('stop');
                dropOne.classList.remove('open');
                dropOne.classList.add('cancel');
                spaceOne.classList.remove('cancel');
                spaceOne.classList.add('open');
                stageOne.classList.remove('open');
                stageOne.classList.add('cancel');
                // this.listing = true
                // console.log("second wave.... ", icon.className, this.dropdownToggle.secondClass);

                if(this.listingTwo == true ){
                    icons.classList.add('active');
                    icons.classList.remove('stop');
                    spaceOne.classList.remove('cancel');
                    spaceOne.classList.add('open');
                    console.log(">>>>>>>>>>>>>>>>")
                    console.log("....howtow", this.listingTwo)
                }
                this.listingTwo = !this.listingTwo;
                console.log("**************")
                console.log("timingtwo", this.listingTwo)
                
                console.log("**************")
                if(!this.listingTwo){
                    icons.classList.add('stop');
                    icons.classList.remove('active');
                    spaceOne.classList.remove('open');
                    spaceOne.classList.add('cancel');
                    // this.listingTwo = !this.listingTwo;
                    console.log("....stylettwo", this.listingTwo)
                    console.log(">>>>>>>>>>>>>>>>")
                }
                // this.listingTwo = !this.listingTwo;
                // console.log("alive", this.listingTwo)
            } 

            if(this.dropdownToggle.thirdClass === true){
                iconic.classList.add('active');
                icons.classList.remove('active');
                icons.classList.add('stop');
                icon.classList.remove('active');
                icon.classList.add('stop');
                dropOne.classList.remove('open');
                dropOne.classList.add('cancel');
                spaceOne.classList.remove('open');
                spaceOne.classList.add('cancel');
                stageOne.classList.remove('cancel');
                stageOne.classList.add('open');
                // this.listing = true
                // console.log("third wave.... ", iconic.className, this.dropdownToggle.thirdClass);

                if(this.listingThree == true){
                    iconic.classList.add('active');
                    iconic.classList.remove('stop');
                    stageOne.classList.remove('cancel');
                    stageOne.classList.add('open');
                    // console.log("....three", this.listingThree)
                }
                this.listingThree = !this.listingThree;
                // console.log("timingThree", this.listingThree)
                if(!this.listingThree){
                    iconic.classList.add('stop');
                    iconic.classList.remove('active');
                    stageOne.classList.remove('open');
                    stageOne.classList.add('cancel');
                    // this.listingThree = !this.listingThree;
                    // console.log("....styletThree", this.listingThree)
                }
                // this.listingThree = !this.listingThree;
                // console.log("but", this.listingThree)
            }
            this.listing = !this.listing;
        },
        toggleIcon(index){
            var box = document.querySelector(".box");
            var square = document.querySelector(".square")
            var triangle = document.querySelector(".triangle")

            if(index === 1){
                // this.iconToggle.isIcon = true;
                this.iconToggle.isIcons = false;
                this.iconToggle.isIconic = false;

                square.classList.add("cancel")
                square.classList.remove("open")
                triangle.classList.add("cancel")
                triangle.classList.remove("open")

                this.iconToggle.isIcon = !this.iconToggle.isIcon;

                if (this.iconToggle.isIcon) {
                    box.classList.add("open")
                    box.classList.remove("cancel")
                    // console.log("Nedd....", this.iconToggle.isIcon)
                }
                if (!this.iconToggle.isIcon) {
                    box.classList.add("cancel")
                    box.classList.remove("open")
                    // console.log("backing...", this.iconToggle.isIcon)
                }
                // console.log("Nedd Arise....", this.iconToggle.isIcon)
                
            }

            if(index === 2){
                this.iconToggle.isIcon = false;
                // this.iconToggle.isIcons = true;
                this.iconToggle.isIconic = false;

                box.classList.add("cancel")
                box.classList.remove("open")
                triangle.classList.add("cancel")
                triangle.classList.remove("open")

                this.iconToggle.isIcons = !this.iconToggle.isIcons;

                if (this.iconToggle.isIcons) {
                    square.classList.add("open")
                    square.classList.remove("cancel")
                    // console.log("Nedd....", this.iconToggle.isIcon)
                }
                if (!this.iconToggle.isIcons) {
                    square.classList.add("cancel")
                    square.classList.remove("open")
                    console.log("backing...", this.iconToggle.isIcon)
                }
                // console.log("Nedd Arise....", this.iconToggle.isIcon)
            }

            if(index === 3){
                
                this.iconToggle.isIcon = false;
                this.iconToggle.isIcons = false;
                // this.iconToggle.isIconic = true;

                box.classList.add("cancel")
                box.classList.remove("open")
                square.classList.add("cancel")
                square.classList.remove("open")

                this.iconToggle.isIconic = !this.iconToggle.isIconic;

                if (this.iconToggle.isIconic) {
                    triangle.classList.add("open")
                    triangle.classList.remove("cancel")
                    // console.log("Nedd....", this.iconToggle.isIcon)
                }
                if (!this.iconToggle.isIconic) {
                    triangle.classList.add("cancel")
                    triangle.classList.remove("open")
                    // console.log("backing...", this.iconToggle.isIcon)
                }
                // console.log("Nedd Arise....", this.iconToggle.isIcon)

            }

        },
        inquiryToggle(){
            var circular = document.querySelector(".circular")
            
            this.iconToggle.isIconListings = !this.iconToggle.isIconListings ;
            if (this.iconToggle.isIconListings ) {
                circular.classList.add("open")
                circular.classList.remove("cancel")
            }
            if (!this.iconToggle.isIconListings) {
                circular.classList.add("cancel")
                circular.classList.remove("open")
            }
        },
        toggleBackDrop(){
            var backdrop = document.querySelector(".backdrop");
            console.log("backdrop...", backdrop)
            backdrop.classList.toggle("visible")
        
        }
    },
}
</script>

<style scoped>

.fa-space-shuttle{
    color: gray;
    transform: rotate(90deg);
}
.fa-space-shuttle:hover{
    color: black;
}

.stop{
  transform: rotate(90deg);
  transition: transform .5s ease;
}

.active{
  transform: rotate(-90deg);
  transition: transform .5s ease;
}
.close{
    display: inline;
    position: absolute;
    left: 78px;
    height:100%;
    top: 15px;
    font-size: 18px;
    transform: rotate(0deg);
    transition: transform .5s ease; 
}
.super{
    display: none;
    position: absolute;
    left: 170px;
    top: 34px;
    background-color: white;
    box-shadow: 2px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 10;
    list-style: none;
    width: 170px;
    border-radius:5px
}

#navbarNavAltMarkup > ul > li:nth-child(5) > ul > li:nth-child(2):hover > .super{
    display: block;
}

.menu-toggle{
    border: 3px solid #28a745;
    padding: 3px 7px;
    border-radius: 3px;
}

.menu-toggle .bars{
    width: 25px;
    height: 2px;
    padding: 2px;
    margin: 5px auto;
    transition: all 0.3s ease-in-out;    
}

.cancel{
    display: none;
}
.open{
    display: block;
}
.backdrop{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(122,121,120,.7);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    padding: .5rem;
    z-index: 1000;
    /* overflow-y: scroll; */
    overflow-y: auto;
    display: none;
}

.visible{
    pointer-events: all;
    display: block;
}

.dropping, .spacing, .staging{
    background-color: white;
    box-shadow: 2px 8px 16px 0px rgba(0,0,0,0.2);
    position: absolute;
    z-index: 10;
    /* left: 40px; */
    /* top: -20px; */
    list-style: none;
    width: 170px;
    border-radius:5px;
}
.dropping li, .spacing li, .staging li{
    margin-left:-32px;
    padding: 5px;
    text-decoration: none;
    cursor: pointer;
}
.dropping li a, .spacing li a, .staging li a{
    margin-left:15px;
    padding: 5px;
    text-decoration: none;
    cursor: pointer;
}
.dropping li:hover, .spacing li:hover, .staging li:hover{
    background-color:#28a745;
    text-decoration-style: none;
    margin-left:-32px;
}
.dropping li:first-child:hover, .spacing li:first-child:hover, .staging li:first-child:hover{
    background-color:#28a745;
    text-decoration-style: none;
    margin-left:-32px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
.dropping li:last-child:hover, .spacing li:last-child:hover, .staging li:last-child:hover{
    background-color:#28a745;
    text-decoration-style: none;
    margin-left:-32px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}


</style>


