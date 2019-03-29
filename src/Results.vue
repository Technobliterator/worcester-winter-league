<template>
  <section class="section" id="results">
    <div class="container">
        <h1 class="title">Results/Draw</h1>
        <h2 class="subtitle">
            View our previous results.
        </h2>
        <tabs animation="slide" :only-fade="false">
            <tab-pane label="First round 2019" selected>
                Results of the first round held on Saturday 16th Feb:
                <table class="table">
                    <thead>
                        <tr>
                            <th>Gala One</th>
                            <th>Gala Two</th>
                            <th>Gala Three</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Droitwich</th>
                            <th>Halesowen</th>
                            <th>Droitwich</th>
                        </tr>
                        <tr>
                            <td>Worcs A	208</td>
                            <td>Halesowen 144 adj 184</td>
                            <td>Redditch A	207 </td>
                        </tr>
                        <tr>
                            <td>Pershore 184</td>
                            <td>Droitwich 127 adj 167</td>
                            <td>Bromsgrove 170</td>
                        </tr>
                        <tr>
                            <td>Worc B 163</td>
                            <td>Perry Beeches 120 adj 160</td>
                            <td>Orion 156</td>
                        </tr>
                        <tr>
                            <td>Worc C 119</td>
                            <td>Stourbridge 102 adj 142</td>
                            <td>Sandwell Shark139</td>
                        </tr>
                        <tr>
                            <td>Sandwell Stor 118</td>
                            <td>Sandwell Striker 95 adj 134<br>scored 5,4,3,2,1</td>
                            <td>Redditch B 120</td>
                        </tr>
                    </tbody>
                </table>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Team</th>
                            <th>Points</th>
                            <th>League Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Worcester A</td>
                            <td>208</td>
                            <td>6 + 6 = 12</td>
                        </tr>
                        <tr>
                            <td>Redditch A</td>
                            <td>207</td>
                            <td>6 + 6 = 12</td>
                        </tr>
                        <tr>
                            <td>Halesowen</td>
                            <td>184 14 first places</td>
                            <td>6 + 6 = 12</td>
                        </tr>
                        <tr>
                            <td>Pershore</td>
                            <td>184 10 first places</td>
                            <td>5 + 6 = 11</td>
                        </tr>
                        <tr>
                            <td>Bromsgrove</td>
                            <td>170</td>
                            <td>5 + 6 = 11</td>
                        </tr>
                        <tr>
                            <td>Droitwich</td>
                            <td>167</td>
                            <td>5 + 6 = 11</td>
                        </tr>
                        <tr>
                            <td>Worcester B</td>
                            <td>163</td>
                            <td>4 + 6 = 10</td>
                        </tr>
                        <tr>
                            <td>Perry Beeches</td>
                            <td>160</td>
                            <td>4 + 6 = 10</td>
                        </tr>
                        <tr>
                            <td>Orion</td>
                            <td>156</td>
                            <td>4 + 6 = 10</td>
                        </tr>
                        <tr>
                            <td>Stourbridge</td>
                            <td>142</td>
                            <td>3 + 6 = 9</td>
                        </tr>
                        <tr>
                            <td>Sandwell Sharks</td>
                            <td>139</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>Sandwell Strikers</td>
                            <td>134</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Redditch B</td>
                            <td>120</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Worcester C</td>
                            <td>119</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>Sandwell Storm</td>
                            <td>118</td>
                            <td>2</td>
                        </tr>
                    </tbody>
                </table>
            </tab-pane>
            <tab-pane label="Second round 2019">
                Results of the second round galas on Saturday 16th March:

                <table class="table">
                    <thead>
                        <tr>
                            <th>Gala One</th>
                            <th>Gala Two</th>
                            <th>Gala Three</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Worcester A 231</td>
                            <td>Redditch A 222 adj 196</td>
                            <td>Worcester C 171</td>
                        </tr>
                        <tr>
                            <td>Worcester B 172</td>
                            <td>Pershore 190 adj 168</td>
                            <td>Sandwell Sharks 164</td>
                        </tr>
                        <tr>
                            <td>Halesowen 157</td>
                            <td>Droitwich 166 adj 147</td>
                            <td>Sandwell Storm 162</td>
                        </tr>
                        <tr>
                            <td>Orion 132</td>
                            <td>Stourbridge 136 adj 120</td>
                            <td>Redditch B 158</td>
                        </tr>
                        <tr>
                            <td>Bromsgrove 93</td>
                            <td>Perry Beeches 0</td>
                            <td>Sandwell Strikers 139</td>
                        </tr>
                    </tbody>
                </table>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Club</th>
                            <th>Gala Points</th>
                            <th>Total Gala Points round 1 and 2</th>
                            <th>League Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Worcester A</td>
                            <td>231</td>
                            <td>439</td>
                            <td>6+10+12 = 28</td>
                        </tr>
                        <tr>
                            <td>Redditch</td>
                            <td>196</td>
                            <td>403</td>
                            <td>6+10+12 = 28</td>
                        </tr>
                        <tr>
                            <td>Worcester B</td>
                            <td>172</td>
                            <td>335</td>
                            <td>5+10+10 = 26</td>
                        </tr>
                        <tr>
                            <td>Pershore</td>
                            <td>168</td>
                            <td>352</td>
                            <td>5+10+11 = 26</td>
                        </tr>
                        <tr>
                            <td>Halesowen</td>
                            <td>157</td>
                            <td>341</td>
                            <td>4+10+12 = 26</td>
                        </tr>
                        <tr>
                            <td>Worcester C</td>
                            <td>171</td>
                            <td>290</td>
                            <td>6+3 = 9</td>
                        </tr>
                        <tr>
                            <td>Sandwell Sharks</td>
                            <td>164</td>
                            <td>303</td>
                            <td>5+5 = 10</td>
                        </tr>
                        <tr>
                            <td>Sandwell Storm</td>
                            <td>162</td>
                            <td>280</td>
                            <td>4+2 = 6</td>
                        </tr>
                        <tr>
                            <td>Redditch B</td>
                            <td>158</td>
                            <td>278</td>
                            <td>3+2 = 5</td>
                        </tr>
                        <tr>
                            <td>Droitwich</td>
                            <td>147</td>
                            <td>314</td>
                            <td>4+11 = 15</td>
                        </tr>
                        <tr>
                            <td>Sandwell Strikers</td>
                            <td>139</td>
                            <td>273</td>
                            <td>2+2 = 4</td>
                        </tr>
                        <tr>
                            <td>Orion</td>
                            <td>132</td>
                            <td>288</td>
                            <td>3+10 = 13</td>
                        </tr>
                        <tr>
                            <td>Stourbridge</td>
                            <td>120</td>
                            <td>262</td>
                            <td>3+9 = 12</td>
                        </tr>
                        <tr>
                            <td>Bromsgrove</td>
                            <td>93</td>
                            <td>263</td>
                            <td>1+11 = 12</td>
                        </tr>
                        <tr>
                            <td>Perry Beeches</td>
                            <td>0</td>
                            <td>160</td>
                            <td>0+10 = 10</td>
                        </tr>
                    </tbody>
                </table>
            </tab-pane>
            <tab-pane label="Next round">
                The next round will be held on Sunday 14th April, all halas to be held at Droitwich Pool.
                <table class="table">
                    <thead>
                        <tr>
                            <th>Gala One</th>
                            <th>Gala Two</th>
                            <th>Gala Three</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>8:30am for 9:00am start</th>
                            <th>11:00am for 11:30am start</th>
                            <th>1:30pm for 2:00pm start</th>
                        </tr>
                        <tr>
                            <td>Sandwell Strikers</td>
                            <td>Worcester C</td>
                            <td>Worcester A</td>
                        </tr>
                        <tr>
                            <td>Orion</td>
                            <td>Sandwell Sharks</td>
                            <td>Redditch</td>
                        </tr>
                        <tr>
                            <td>Stourbridge</td>
                            <td>Sandwell Storm</td>
                            <td>Worcester B</td>
                        </tr>
                        <tr>
                            <td>Bromsgrove</td>
                            <td>Redditch B</td>
                            <td>Pershore</td>
                        </tr>
                        <tr>
                            <td>Perry Beeches</td>
                            <td>Droitwich</td>
                            <td>Halesowen</td>
                        </tr>
                        <tr>
                            <th>Bromsgrove to organise</th>
                            <th>Droitwich to organise</th>
                            <th>Pershore to organise</th>
                        </tr>
                    </tbody>
                </table>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Club</th>
                            <th>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Worcester A</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>Redditch A</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>Pershore</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <td>Halesowen</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <td>Worcester B</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>Droitwich</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>Orion</td>
                            <td>13</td>
                        </tr>
                        <tr>
                            <td>Bromsgrove</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Stourbridge</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Sandwell Sharks</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Perry Beeches</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Worcester C</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>Sandwell Storm</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>Redditch B</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Sandwell Strikers</td>
                            <td>4</td>
                        </tr>
                    </tbody>
                </table>
            </tab-pane>
        </tabs>
    </div>
  </section>
</template>

<script>
import { Tabs, TabPane } from 'vue-bulma-tabs'
export default {
    name: 'results',
    components: {
        Tabs,
        TabPane
    }
}
</script>

<style>
ol {
    list-style-type: decimal;
}
</style>
