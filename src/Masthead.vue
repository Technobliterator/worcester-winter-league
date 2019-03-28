<template>
    <header class="masthead">
        <div class="container">
            <div class="text">
                <div class="heading">Worcester Winter League</div>
                <div class="date">Next held on Sunday 14th April</div>
                <a href="#results" class="button is-warning">Results</a>
                <a href="#rules" class="button is-warning">Rules</a>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'masthead',
  data () {
    return {
      msg: 'Masthead'
    }
  },
}
</script>

<style>
header.masthead {
    text-align: center;
    color: white;
    background-image: url("assets/header-bg.jpg");
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center center;
    background-size: cover;
    position: relative;
    z-index: 1;
}

header.masthead::before {
    display: block;
    content: "";
    position: absolute;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.2);
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}

header.masthead .text {
    padding-top: 150px;
    padding-bottom: 100px;
}

header.masthead .text .heading {
    font-size: 50px;
    font-weight: 700;
    line-height: 50px;
    margin-bottom: 25px;
}

@media (min-width: 768px) {
    header.masthead .text {
        padding-top: 300px;
        padding-bottom: 200px;
    }
    header.masthead .text .lead-in {
        font-size: 40px;
        font-style: italic;
        line-height: 40px;
        margin-bottom: 25px;
    }
    header.masthead .text .heading {
        font-size: 75px;
        font-weight: 700;
        line-height: 75px;
        margin-bottom: 50px;
    }
}

header.masthead .date {
    font-weight: bold;
}
header.masthead .button {
    background-color: #fed136;
    color: white;
    font-weight: 800;
    margin: 5px;
}
</style>
