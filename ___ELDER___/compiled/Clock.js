"use strict";var e=require("./index-c81a418a.js");const A={code:"svg.svelte-5bcmwa{width:100%;height:100%}.clock-face.svelte-5bcmwa{stroke:#333;fill:white}.minor.svelte-5bcmwa{stroke:#999;stroke-width:0.5}.major.svelte-5bcmwa{stroke:#333;stroke-width:1}.hour.svelte-5bcmwa{stroke:#333}.minute.svelte-5bcmwa{stroke:#666}.second.svelte-5bcmwa,.second-counterweight.svelte-5bcmwa{stroke:rgb(180, 0, 0)}.second-counterweight.svelte-5bcmwa{stroke-width:3}",map:'{"version":3,"file":"Clock.svelte","sources":["Clock.svelte"],"sourcesContent":["<script>\\n  import { onMount } from \\"svelte\\";\\n\\n  let time = new Date();\\n\\n  // these automatically update when `time`\\n  // changes, because of the `$:` prefix\\n  $: hours = time.getHours();\\n  $: minutes = time.getMinutes();\\n  $: seconds = time.getSeconds();\\n\\n  onMount(() => {\\n    const interval = setInterval(() => {\\n      time = new Date();\\n    }, 1000);\\n\\n    return () => {\\n      clearInterval(interval);\\n    };\\n  });\\n<\/script>\\n\\n<style>svg {\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.clock-face {\\n  stroke: #333;\\n  fill: white;\\n}\\n\\n.minor {\\n  stroke: #999;\\n  stroke-width: 0.5;\\n}\\n\\n.major {\\n  stroke: #333;\\n  stroke-width: 1;\\n}\\n\\n.hour {\\n  stroke: #333;\\n}\\n\\n.minute {\\n  stroke: #666;\\n}\\n\\n.second,\\n  .second-counterweight {\\n  stroke: rgb(180, 0, 0);\\n}\\n\\n.second-counterweight {\\n  stroke-width: 3;\\n}</style>\\n\\n<svg viewBox=\\"-50 -50 100 100\\">\\n  <circle class=\\"clock-face\\" r=\\"48\\" />\\n\\n  \x3c!-- markers --\x3e\\n  {#each [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] as minute}\\n    <line class=\\"major\\" y1=\\"35\\" y2=\\"45\\" transform=\\"rotate({30 * minute})\\" />\\n\\n    {#each [1, 2, 3, 4] as offset}\\n      <line class=\\"minor\\" y1=\\"42\\" y2=\\"45\\" transform=\\"rotate({6 * (minute + offset)})\\" />\\n    {/each}\\n  {/each}\\n\\n  \x3c!-- hour hand --\x3e\\n  <line class=\\"hour\\" y1=\\"2\\" y2=\\"-20\\" transform=\\"rotate({30 * hours + minutes / 2})\\" />\\n\\n  \x3c!-- minute hand --\x3e\\n  <line class=\\"minute\\" y1=\\"4\\" y2=\\"-30\\" transform=\\"rotate({6 * minutes + seconds / 10})\\" />\\n\\n  \x3c!-- second hand --\x3e\\n  <g transform=\\"rotate({6 * seconds})\\">\\n    <line class=\\"second\\" y1=\\"10\\" y2=\\"-38\\" />\\n    <line class=\\"second-counterweight\\" y1=\\"10\\" y2=\\"2\\" />\\n  </g>\\n</svg>\\n"],"names":[],"mappings":"AAsBO,GAAG,cAAC,CAAC,AACV,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,AACd,CAAC,AAED,WAAW,cAAC,CAAC,AACX,MAAM,CAAE,IAAI,CACZ,IAAI,CAAE,KAAK,AACb,CAAC,AAED,MAAM,cAAC,CAAC,AACN,MAAM,CAAE,IAAI,CACZ,YAAY,CAAE,GAAG,AACnB,CAAC,AAED,MAAM,cAAC,CAAC,AACN,MAAM,CAAE,IAAI,CACZ,YAAY,CAAE,CAAC,AACjB,CAAC,AAED,KAAK,cAAC,CAAC,AACL,MAAM,CAAE,IAAI,AACd,CAAC,AAED,OAAO,cAAC,CAAC,AACP,MAAM,CAAE,IAAI,AACd,CAAC,AAED,qBAAO,CACL,qBAAqB,cAAC,CAAC,AACvB,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AACxB,CAAC,AAED,qBAAqB,cAAC,CAAC,AACrB,YAAY,CAAE,CAAC,AACjB,CAAC"}'},n=e.create_ssr_component((n,t,s,c)=>{let r=new Date;e.onMount(()=>{const e=setInterval(()=>{r=new Date},1e3);return()=>{clearInterval(e)}}),n.css.add(A);let o=r.getHours(),a=r.getMinutes(),C=r.getSeconds();return`<svg viewBox="-50 -50 100 100" class="svelte-5bcmwa"><circle class="clock-face svelte-5bcmwa" r="48"></circle>${e.each([0,5,10,15,20,25,30,35,40,45,50,55],A=>`<line class="major svelte-5bcmwa" y1="35" y2="45" transform="${"rotate("+e.escape(30*A)+")"}"></line>\n\n    ${e.each([1,2,3,4],n=>`<line class="minor svelte-5bcmwa" y1="42" y2="45" transform="${"rotate("+e.escape(6*(A+n))+")"}"></line>`)}`)}<line class="hour svelte-5bcmwa" y1="2" y2="-20" transform="${"rotate("+e.escape(30*o+a/2)+")"}"></line><line class="minute svelte-5bcmwa" y1="4" y2="-30" transform="${"rotate("+e.escape(6*a+C/10)+")"}"></line><g transform="${"rotate("+e.escape(6*C)+")"}"><line class="second svelte-5bcmwa" y1="10" y2="-38"></line><line class="second-counterweight svelte-5bcmwa" y1="10" y2="2"></line></g></svg>`});module.exports=n;
