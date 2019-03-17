<template>
  <section class="section" id="results">
    <div class="container">
        <h1 class="title">Results/Draw</h1>
        <h2 class="subtitle">
            View our previous results.
        </h2>
        <tabs animation="slide" :only-fade="false">
            <tab-pane label="First round 2018" selected>
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
                            <td>Halesowen	   144  adj 184</td>
                            <td>Redditch A	207 </td>
                        </tr>
                        <tr>
                            <td>Pershore	184</td>
                            <td>Droitwich 127  adj 167</td>
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
            <tab-pane label="Second round 2018">
                Results of the second round:

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
                            <th>Halesowen</th>
                            <th>Droitwich</th>
                            <th>Droitwich</th>
                        </tr>
                        <tr>
                            <th>6pm for 6-30pm</th>
                            <th>5-15pm for 5-35 start</th>
                            <th>7-00pm for 7-20pm start</th>
                        </tr>
                        <tr>
                            <td>Worcester A</td>
                            <td>Redditch A</td>
                            <td>Sandwell Sharks</td>
                        </tr>
                        <tr>
                            <td>Halesowen</td>
                            <td>Pershore</td>
                            <td>Sandwell Strikers</td>
                        </tr>
                        <tr>
                            <td>Bromsgrove</td>
                            <td>Droitwich</td>
                            <td>Redditch B</td>
                        </tr>
                        <tr>
                            <td>Worcester B</td>
                            <td>Perry Beeches</td>
                            <td>Worcester C</td>
                        </tr>
                        <tr>
                            <td>Orion</td>
                            <td>Stourbridge</td>
                            <td>Sandwell Storm</td>
                        </tr>
                        <tr>
                            <th>Bromsgrove to organise</th>
                            <th>Droitwich to organise</th>
                            <th>Sandwell to organise</th>
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
