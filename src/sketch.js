let x = [];
let y = [];
let fourierX;
let fourierY;
let time = 0;
let path = [];

function setup() {
  createCanvas(800, 1000);
  const skip = 8;
  const scale = 25;
  for (let i = 0; i < drawing.length; i += skip) {
    newX = map(drawing[i].x,0,50,-30,120);
    newY = map(drawing[i].y,0,50,135,-65);
    x.push(newX * scale);
    y.push(newY * scale);
  }
  fourierX = dft(x);
  fourierY = dft(y);

  fourierX.sort((a, b) => b.amp - a.amp);
  fourierY.sort((a, b) => b.amp - a.amp);
}

function epiCycles(x, y, rotation, fourier) {
  for (let i = 0; i < fourier.length; i++) {
    let prevx = x;
    let prevy = y;
    let freq = fourier[i].freq;
    let radius = fourier[i].amp;
    let phase = fourier[i].phase;
    x += radius * cos(freq * time + phase + rotation);
    y += radius * sin(freq * time + phase + rotation);

    stroke(255, 100);
    noFill();
    ellipse(prevx, prevy, radius * 2);
    stroke(255);
    line(prevx, prevy, x, y);
  }
  return createVector(x, y);
}

function draw() {
  background(0);

  let vx = epiCycles(width / 2 + 100, 100, 0, fourierX);
  let vy = epiCycles(100, height / 2 + 100, HALF_PI, fourierY);
  let v = createVector(vx.x, vy.y);
  path.unshift(v);
  line(vx.x, vx.y, v.x, v.y);
  line(vy.x, vy.y, v.x, v.y);

  beginShape();
  noFill();
  for (let i = 0; i < path.length; i++) {
    vertex(path[i].x, path[i].y);
  }
  endShape();

  const dt = TWO_PI / fourierY.length;
  time += dt;

  if (time > TWO_PI) {
    time = 0;
    path = [];
  }

}


let drawing = [ 
   { x:9.861664259, y:37.271185614 },
   { x:9.83073978, y:37.251206773 },
   { x:9.792735222, y:37.238023179 },
   { x:9.771820509, y:37.213324286 },
   { x:9.775075717, y:37.205796617 },
   { x:9.790700717, y:37.178412177 },
   { x:9.79566491, y:37.172349351 },
   { x:9.801524285, y:37.169134833 },
   { x:9.807790561, y:37.155015367 },
   { x:9.815928582, y:37.151841539 },
   { x:9.859711134, y:37.147040106 },
   { x:9.879893425, y:37.150091864 },
   { x:9.902110222, y:37.164862372 },
   { x:9.914317254, y:37.178290106 },
   { x:9.925303582, y:37.196763414 },
   { x:9.924978061, y:37.213120835 },
   { x:9.861175977, y:37.233832098 },
   { x:9.851573113, y:37.232855536 },
   { x:9.8310653, y:37.227728583 },
   { x:9.819590691, y:37.227606512 },
   { x:9.819590691, y:37.233832098 },
   { x:9.843923373, y:37.247463283 },
   { x:9.853526238, y:37.249497789 },
   { x:9.859629754, y:37.25413646 },
   { x:9.863942905, y:37.259019273 },
   { x:9.867442254, y:37.26170482 },
   { x:9.882497592, y:37.263576565 },
   { x:9.979828321, y:37.24603913 },
   { x:9.997813347, y:37.247463283 },
   { x:10.051280144, y:37.266587632 },
   { x:10.059825066, y:37.264837958 },
   { x:10.075856967, y:37.244940497 },
   { x:10.146250847, y:37.236517645 },
   { x:10.17872155, y:37.212713934 },
   { x:10.253103061, y:37.19139232 },
   { x:10.27214603, y:37.178534247 },
   { x:10.240082227, y:37.17177969 },
   { x:10.22527103, y:37.166734117 },
   { x:10.211273634, y:37.158677476 },
   { x:10.20582116, y:37.175116278 },
   { x:10.177989129, y:37.177964585 },
   { x:10.146006707, y:37.171210028 },
   { x:10.128103061, y:37.158677476 },
   { x:10.13542728, y:37.142320054 },
   { x:10.161631707, y:37.134344794 },
   { x:10.191905144, y:37.133246161 },
   { x:10.211273634, y:37.137600002 },
   { x:10.218190951, y:37.12893301 },
   { x:10.227061394, y:37.117661851 },
   { x:10.230316602, y:37.108099677 },
   { x:10.224375847, y:37.095933335 },
   { x:10.21753991, y:37.110296942 },
   { x:10.174327019, y:37.076239325 },
   { x:10.18238366, y:37.027044989 },
   { x:10.220062696, y:36.97662995 },
   { x:10.265879754, y:36.938910223 },
   { x:10.303233269, y:36.924383856 },
   { x:10.313731316, y:36.918443101 },
   { x:10.337006056, y:36.891831773 },
   { x:10.347178582, y:36.880275783 },
   { x:10.341970248, y:36.868597723 },
   { x:10.31902103, y:36.850246486 },
   { x:10.309336785, y:36.829779364 },
   { x:10.298838738, y:36.821763414 },
   { x:10.285166863, y:36.819973049 },
   { x:10.27214603, y:36.829087632 },
   { x:10.279551629, y:36.844305731 },
   { x:10.270192905, y:36.848456122 },
   { x:10.2529403, y:36.846340236 },
   { x:10.220469597, y:36.837795315 },
   { x:10.210703972, y:36.831854559 },
   { x:10.193614129, y:36.812323309 },
   { x:10.188487175, y:36.797593492 },
   { x:10.202891472, y:36.792629299 },
   { x:10.234222852, y:36.791896877 },
   { x:10.247243686, y:36.786281643 },
   { x:10.253916863, y:36.791449286 },
   { x:10.257009311, y:36.793850002 },
   { x:10.27214603, y:36.816066799 },
   { x:10.293630405, y:36.777736721 },
   { x:10.320078972, y:36.748765367 },
   { x:10.355316602, y:36.731187242 },
   { x:10.403005405, y:36.72671133 },
   { x:10.41675866, y:36.729559637 },
   { x:10.436995327, y:36.728839412 },
   { x:10.487727274, y:36.749651543 },
   { x:10.518713489, y:36.755796726 },
   { x:10.538232868, y:36.77202591 },
   { x:10.546049949, y:36.799921159 },
   { x:10.552598455, y:36.822920654 },
   { x:10.566905144, y:36.86322663 },
   { x:10.58497155, y:36.876166083 },
   { x:10.606130405, y:36.879706122 },
   { x:10.652598504, y:36.876898505 },
   { x:10.694672071, y:36.883449611 },
   { x:10.733465667, y:36.895812251 },
   { x:10.783205036, y:36.924417926 },
   { x:10.813975457, y:36.950384833 },
   { x:10.82309004, y:36.953924872 },
   { x:10.82691491, y:36.963202216 },
   { x:10.830088738, y:36.968247789 },
   { x:10.887543165, y:37.006008205 },
   { x:10.895843946, y:37.014105536 },
   { x:10.898448113, y:37.025213934 },
   { x:10.894704623, y:37.032171942 },
   { x:10.892914259, y:37.038641669 },
   { x:10.902110222, y:37.048814195 },
   { x:10.923675977, y:37.057033596 },
   { x:10.974131707, y:37.061265367 },
   { x:11.012705925, y:37.084784247 },
   { x:11.033376498, y:37.087469794 },
   { x:11.051036004, y:37.080308335 },
   { x:11.060313347, y:37.06248607 },
   { x:11.058929884, y:37.053900458 },
   { x:11.048594597, y:37.041978257 },
   { x:11.046071811, y:37.03143952 },
   { x:11.048350457, y:37.020331122 },
   { x:11.058116082, y:37.006008205 },
   { x:11.060313347, y:36.997015692 },
   { x:11.063975457, y:36.990057684 },
   { x:11.081309441, y:36.969387111 },
   { x:11.087738477, y:36.959418036 },
   { x:11.090098504, y:36.949611721 },
   { x:11.091807488, y:36.928208726 },
   { x:11.094493035, y:36.918443101 },
   { x:11.099131707, y:36.910589911 },
   { x:11.105967644, y:36.901597398 },
   { x:11.113129102, y:36.894232489 },
   { x:11.118418816, y:36.891180731 },
   { x:11.124278191, y:36.885687567 },
   { x:11.136226578, y:36.870530121 },
   { x:11.130545149, y:36.854038798 },
   { x:11.116766912, y:36.838411877 },
   { x:11.076735226, y:36.825188398 },
   { x:11.022139533, y:36.788276075 },
   { x:10.992547829, y:36.744064456 },
   { x:10.949929815, y:36.693877741 },
   { x:10.87951936, y:36.588474994 },
   { x:10.825662358, y:36.479810783 },
   { x:10.799928575, y:36.451885235 },
   { x:10.717153534, y:36.434551236 },
   { x:10.620440907, y:36.390280397 },
   { x:10.585564369, y:36.398132016 },
   { x:10.550928289, y:36.377255796 },
   { x:10.519085115, y:36.337472459 },
   { x:10.504844912, y:36.299354722 },
   { x:10.491067929, y:36.258065642 },
   { x:10.479266895, y:36.216961997 },
   { x:10.476855707, y:36.16552186 },
   { x:10.474694877, y:36.112485958 },
   { x:10.479527532, y:36.079327304 },
   { x:10.492393454, y:36.045340814 },
   { x:10.499847852, y:36.02728913 },
   { x:10.504730665, y:36.020941473 },
   { x:10.509125196, y:36.011175848 },
   { x:10.514821811, y:35.989081122 },
   { x:10.5185653, y:35.979966539 },
   { x:10.540537957, y:35.952826239 },
   { x:10.556488477, y:35.937974351 },
   { x:10.570323113, y:35.931586005 },
   { x:10.582286004, y:35.92182038 },
   { x:10.608571811, y:35.855861721 },
   { x:10.622080925, y:35.842596747 },
   { x:10.691335483, y:35.789618231 },
   { x:10.693695509, y:35.787787177 },
   { x:10.713063998, y:35.779242255 },
   { x:10.743619663, y:35.769672076 },
   { x:10.80372155, y:35.786932684 },
   { x:10.813812696, y:35.784979559 },
   { x:10.82309004, y:35.780462958 },
   { x:10.841420439, y:35.766547617 },
   { x:10.83033969, y:35.753233544 },
   { x:10.824522355, y:35.733389134 },
   { x:10.829600457, y:35.713120835 },
   { x:10.841156446, y:35.698797919 },
   { x:10.88152103, y:35.683010158 },
   { x:10.971815894, y:35.654138114 },
   { x:11.011973504, y:35.657904364 },
   { x:11.04099805, y:35.637730383 },
   { x:11.055021624, y:35.614476322 },
   { x:11.017100457, y:35.602280992 },
   { x:11.011973504, y:35.579046942 },
   { x:11.013926629, y:35.562892971 },
   { x:11.014903191, y:35.555161851 },
   { x:11.023936394, y:35.533758856 },
   { x:11.039235873, y:35.518500067 },
   { x:11.085057411, y:35.506785421 },
   { x:11.057689731, y:35.486733472 },
   { x:11.050666014, y:35.459781746 },
   { x:11.045530315, y:35.434754664 },
   { x:11.049412181, y:35.391255272 },
   { x:11.03718778, y:35.370821392 },
   { x:11.042232667, y:35.334435394 },
   { x:11.065890552, y:35.303268366 },
   { x:11.101328972, y:35.266831773 },
   { x:11.122080925, y:35.253648179 },
   { x:11.147103928, y:35.244005401 },
   { x:11.160781762, y:35.23823214 },
   { x:11.159159606, y:35.218757087 },
   { x:11.131352161, y:35.217959043 },
   { x:11.111577776, y:35.20559467 },
   { x:11.09231553, y:35.173938785 },
   { x:11.062912201, y:35.153638925 },
   { x:11.048830264, y:35.131223359 },
   { x:11.034990274, y:35.107055576 },
   { x:11.015879754, y:35.092840887 },
   { x:11.02245254, y:35.064502308 },
   { x:11.018105253, y:35.034190914 },
   { x:10.984366015, y:34.999413969 },
   { x:10.945862975, y:34.983531199 },
   { x:10.917653842, y:34.957424221 },
   { x:10.924951137, y:34.934121989 },
   { x:10.916514519, y:34.913316148 },
   { x:10.916335641, y:34.87356914 },
   { x:10.875498894, y:34.849066473 },
   { x:10.866709832, y:34.841253973 },
   { x:10.860362175, y:34.836818752 },
   { x:10.856293165, y:34.830877997 },
   { x:10.867357628, y:34.811033137 },
   { x:10.871421001, y:34.797366971 },
   { x:10.834884905, y:34.78339816 },
   { x:10.81126229, y:34.768880123 },
   { x:10.779042135, y:34.739501375 },
   { x:10.763468906, y:34.71344816 },
   { x:10.743988477, y:34.698675848 },
   { x:10.734711134, y:34.680853583 },
   { x:10.717295769, y:34.664740302 },
   { x:10.701182488, y:34.655951239 },
   { x:10.634287957, y:34.637884833 },
   { x:10.625254754, y:34.633246161 },
   { x:10.621429884, y:34.626288153 },
   { x:10.61988366, y:34.615871486 },
   { x:10.615000847, y:34.603583075 },
   { x:10.607432488, y:34.593329169 },
   { x:10.605709539, y:34.573668252 },
   { x:10.598751836, y:34.562453465 },
   { x:10.597023266, y:34.544713234 },
   { x:10.581614599, y:34.532679159 },
   { x:10.559376362, y:34.523490489 },
   { x:10.465993686, y:34.51194896 },
   { x:10.431895379, y:34.49632396 },
   { x:10.378723611, y:34.423080315 },
   { x:10.330414259, y:34.412583726 },
   { x:10.320485873, y:34.413234768 },
   { x:10.31128991, y:34.416815497 },
   { x:10.300059441, y:34.417710679 },
   { x:10.28809655, y:34.41400788 },
   { x:10.281993035, y:34.408880927 },
   { x:10.278005405, y:34.402736721 },
   { x:10.25660241, y:34.37909577 },
   { x:10.247243686, y:34.372137762 },
   { x:10.234222852, y:34.369330145 },
   { x:10.186778191, y:34.351955471 },
   { x:10.16667728, y:34.338812567 },
   { x:10.126719597, y:34.325628973 },
   { x:10.102161376, y:34.304074944 },
   { x:10.089778403, y:34.272974503 },
   { x:10.054033834, y:34.213163235 },
   { x:10.032777141, y:34.184654922 },
   { x:10.018809441, y:34.180568752 },
   { x:10.010264519, y:34.173163153 },
   { x:10.010101759, y:34.173081773 },
   { x:10.005218946, y:34.170640367 },
   { x:10.01465905, y:34.153387762 },
   { x:10.01840254, y:34.133490302 },
   { x:10.01823978, y:34.091538804 },
   { x:10.021494988, y:34.073309637 },
   { x:10.036143425, y:34.034491278 },
   { x:10.039317254, y:34.016099351 },
   { x:10.048838738, y:33.983465887 },
   { x:10.071299675, y:33.946234442 },
   { x:10.16309655, y:33.836249091 },
   { x:10.172699415, y:33.82807038 },
   { x:10.186859571, y:33.821763414 },
   { x:10.330251498, y:33.702826239 },
   { x:10.367686394, y:33.684068101 },
   { x:10.446055535, y:33.655422268 },
   { x:10.460215691, y:33.652696031 },
   { x:10.489268425, y:33.647121486 },
   { x:10.558372869, y:33.65572112 },
   { x:10.634071727, y:33.673627658 },
   { x:10.697618425, y:33.702596743 },
   { x:10.716644727, y:33.70693594 },
   { x:10.739991963, y:33.671578426 },
   { x:10.736923596, y:33.602850314 },
   { x:10.707530144, y:33.581691799 },
   { x:10.691416863, y:33.576117255 },
   { x:10.679047071, y:33.56256745 },
   { x:10.674082879, y:33.545599677 },
   { x:10.679942254, y:33.529852606 },
   { x:10.703623894, y:33.49603913 },
   { x:10.717133009, y:33.483547268 },
   { x:10.738129102, y:33.478013414 },
   { x:10.780528191, y:33.485744533 },
   { x:10.856211785, y:33.524318752 },
   { x:10.892263217, y:33.533270575 },
   { x:10.909434441, y:33.539618231 },
   { x:10.925140821, y:33.555080471 },
   { x:10.932790561, y:33.574042059 },
   { x:10.926280144, y:33.591253973 },
   { x:10.9091903, y:33.607855536 },
   { x:10.906504754, y:33.616441148 },
   { x:10.93620853, y:33.636297919 },
   { x:10.94792728, y:33.629461981 },
   { x:10.960622592, y:33.627671617 },
   { x:10.97144616, y:33.631903387 },
   { x:10.977875196, y:33.643133856 },
   { x:10.984629754, y:33.643133856 },
   { x:11.000661655, y:33.634182033 },
   { x:11.042816602, y:33.617865302 },
   { x:11.060313347, y:33.608343817 },
   { x:11.073578321, y:33.594468492 },
   { x:11.10816491, y:33.549627997 },
   { x:11.111582879, y:33.540025132 },
   { x:11.116621178, y:33.48997283 },
   { x:11.089929354, y:33.454148712 },
   { x:11.110783424, y:33.392970468 },
   { x:11.102073675, y:33.364080875 },
   { x:11.131114129, y:33.371527411 },
   { x:11.150889519, y:33.353949286 },
   { x:11.17066491, y:33.331773179 },
   { x:11.193858269, y:33.320990302 },
   { x:11.21778405, y:33.31631094 },
   { x:11.269053582, y:33.294256903 },
   { x:11.293711785, y:33.286810614 },
   { x:11.287364129, y:33.282049872 },
   { x:11.284434441, y:33.280829169 },
   { x:11.28003991, y:33.280015367 },
   { x:11.181895379, y:33.306789455 },
   { x:11.133636915, y:33.311428127 },
   { x:11.121836785, y:33.280015367 },
   { x:11.13152103, y:33.268052476 },
   { x:11.147715691, y:33.256903387 },
   { x:11.163340691, y:33.242621161 },
   { x:11.170176629, y:33.221014716 },
   { x:11.179535352, y:33.21108633 },
   { x:11.201508009, y:33.21116771 },
   { x:11.245371941, y:33.217922268 },
   { x:11.28785241, y:33.210109768 },
   { x:11.372243686, y:33.18378327 },
   { x:11.41675866, y:33.18378327 },
   { x:11.433116082, y:33.193548895 },
   { x:11.427582227, y:33.20701732 },
   { x:11.410655144, y:33.21893952 },
   { x:11.392751498, y:33.224107164 },
   { x:11.381358269, y:33.23069896 },
   { x:11.367442254, y:33.245266018 },
   { x:11.351898634, y:33.258856512 },
   { x:11.442393425, y:33.204657294 },
   { x:11.497813347, y:33.182684637 },
   { x:11.504567905, y:33.181341864 },
   { x:11.505111803, y:33.1812253147 },
   { x:11.50604659, y:33.136376445 },
   { x:11.477417847, y:33.041214295 },
   { x:11.474937378, y:33.025840556 },
   { x:11.474420613, y:32.96987498 },
   { x:11.456540567, y:32.902101339 },
   { x:11.463775268, y:32.798464254 },
   { x:11.449202514, y:32.693018494 },
   { x:11.449925985, y:32.637957255 },
   { x:11.470389852, y:32.599277446 },
   { x:11.537362508, y:32.543518575 },
   { x:11.560616903, y:32.507577616 },
   { x:11.5641309, y:32.465487163 },
   { x:11.546354207, y:32.434274598 },
   { x:11.526085437, y:32.417862703 },
   { x:11.513901408, y:32.407997131 },
   { x:11.444034871, y:32.368490499 },
   { x:11.182341254, y:32.262223369 },
   { x:10.873217, y:32.136695862 },
   { x:10.845931844, y:32.111787822 },
   { x:10.805624227, y:32.032361145 },
   { x:10.772861369, y:32.004507549 },
   { x:10.736584513, y:31.985387269 },
   { x:10.703098185, y:31.96218455 },
   { x:10.683564493, y:31.957016907 },
   { x:10.665271036, y:31.963218079 },
   { x:10.647287638, y:31.971951396 },
   { x:10.628477417, y:31.974121806 },
   { x:10.605946492, y:31.953606263 },
   { x:10.59757491, y:31.873507792 },
   { x:10.584552449, y:31.840279846 },
   { x:10.54238448, y:31.806638489 },
   { x:10.525537963, y:31.772066956 },
   { x:10.513549031, y:31.757029114 },
   { x:10.498872924, y:31.744316711 },
   { x:10.482543172, y:31.733102925 },
   { x:10.427766154, y:31.714602763 },
   { x:10.31542159, y:31.715842997 },
   { x:10.263951863, y:31.680496318 },
   { x:10.196462442, y:31.578590393 },
   { x:10.132590373, y:31.517560527 },
   { x:10.116880737, y:31.494409485 },
   { x:10.106235392, y:31.429193828 },
   { x:10.108095744, y:31.411830547 },
   { x:10.182716512, y:31.240781556 },
   { x:10.213205607, y:31.135361633 },
   { x:10.244831584, y:31.078155823 },
   { x:10.246175171, y:31.059552307 },
   { x:10.240594116, y:31.021156719 },
   { x:10.245038289, y:30.985706686 },
   { x:10.270153036, y:30.915633443 },
   { x:10.269739624, y:30.882147115 },
   { x:10.253926636, y:30.841787821 },
   { x:10.192224976, y:30.731251933 },
   { x:10.101171101, y:30.641696676 },
   { x:9.995647827, y:30.494522196 },
   { x:9.871314331, y:30.355150859 },
   { x:9.845786174, y:30.342283427 },
   { x:9.772922404, y:30.338097636 },
   { x:9.743466838, y:30.331328024 },
   { x:9.519707885, y:30.228905335 },
   { x:9.491389201, y:30.338976135 },
   { x:9.463070516, y:30.449046937 },
   { x:9.434751831, y:30.55906606 },
   { x:9.406329793, y:30.669085185 },
   { x:9.377907756, y:30.779155985 },
   { x:9.34958907, y:30.88917511 },
   { x:9.321270386, y:30.999245911 },
   { x:9.292951701, y:31.109316712 },
   { x:9.264426311, y:31.219335836 },
   { x:9.236210978, y:31.329406637 },
   { x:9.207788941, y:31.439425761 },
   { x:9.179470255, y:31.549496562 },
   { x:9.151151571, y:31.659567363 },
   { x:9.122729533, y:31.76953481 },
   { x:9.094514201, y:31.879605611 },
   { x:9.06598881, y:31.989676412 },
   { x:9.063303822, y:32.000191513 },
   { x:9.045008179, y:32.07184194 },
   { x:9.033742716, y:32.090755514 },
   { x:9.019893433, y:32.10486318 },
   { x:8.851531616, y:32.208241882 },
   { x:8.642345419, y:32.336657817 },
   { x:8.482665242, y:32.434791362 },
   { x:8.359985392, y:32.501014709 },
   { x:8.33262728, y:32.526355407 },
   { x:8.331253296, y:32.527628072 },
   { x:8.319574422, y:32.560597636 },
   { x:8.309962606, y:32.663872986 },
   { x:8.296423381, y:32.804407043 },
   { x:8.282884156, y:32.836368917 },
   { x:8.181391642, y:32.969823303 },
   { x:8.086823771, y:33.094285991 },
   { x:8.064499552, y:33.105783997 },
   { x:8.043622274, y:33.101830749 },
   { x:8.022641642, y:33.103045146 },
   { x:8.002177775, y:33.108367819 },
   { x:7.982747437, y:33.116816915 },
   { x:7.871953166, y:33.184125468 },
   { x:7.835469604, y:33.194538269 },
   { x:7.787513875, y:33.198310649 },
   { x:7.750720255, y:33.207664083 },
   { x:7.724985392, y:33.231409404 },
   { x:7.709689168, y:33.278150737 },
   { x:7.708286223, y:33.410703984 },
   { x:7.708242228, y:33.414860738 },
   { x:7.693152709, y:33.454108989 },
   { x:7.616568237, y:33.565962626 },
   { x:7.553006225, y:33.658747661 },
   { x:7.544427938, y:33.68424998 },
   { x:7.534196004, y:33.736236471 },
   { x:7.505463908, y:33.782848613 },
   { x:7.498539266, y:33.79997935 },
   { x:7.484896688, y:33.85501475 },
   { x:7.479832398, y:33.893901265 },
   { x:7.500606323, y:33.994256898 },
   { x:7.503706909, y:34.067973328 },
   { x:7.51745284, y:34.09502594 },
   { x:7.539228219, y:34.113757839 },
   { x:7.579567911, y:34.148459372 },
   { x:7.604062541, y:34.175486145 },
   { x:7.631451049, y:34.199102275 },
   { x:7.670311727, y:34.215302836 },
   { x:7.733873738, y:34.223777771 },
   { x:7.752787313, y:34.232149353 },
   { x:7.765293009, y:34.244706726 },
   { x:7.774284709, y:34.260958964 },
   { x:7.811905151, y:34.379272156 },
   { x:7.831542195, y:34.414386292 },
   { x:7.870609579, y:34.437899068 },
   { x:7.957322632, y:34.469421692 },
   { x:7.999077189, y:34.494174703 },
   { x:8.094058472, y:34.5301415 },
   { x:8.10248316, y:34.536354708 },
   { x:8.143667846, y:34.566728414 },
   { x:8.1672323, y:34.578562317 },
   { x:8.17519047, y:34.585280253 },
   { x:8.179531291, y:34.592153219 },
   { x:8.186559286, y:34.609568176 },
   { x:8.19286381, y:34.617733053 },
   { x:8.228830607, y:34.636439922 },
   { x:8.236478719, y:34.647653708 },
   { x:8.210640503, y:34.681191712 },
   { x:8.21343103, y:34.696746318 },
   { x:8.225213257, y:34.711680807 },
   { x:8.257355997, y:34.73974111 },
   { x:8.25871446, y:34.741298 },
   { x:8.266554403, y:34.750283102 },
   { x:8.26934493, y:34.763874003 },
   { x:8.250741414, y:34.864746399 },
   { x:8.248881062, y:34.901953431 },
   { x:8.259009644, y:34.940659079 },
   { x:8.282884156, y:34.994040833 },
   { x:8.300454142, y:35.067679749 },
   { x:8.313683309, y:35.103078105 },
   { x:8.360915568, y:35.145917868 },
   { x:8.421376993, y:35.222088929 },
   { x:8.431298869, y:35.241725973 },
   { x:8.396882365, y:35.263688457 },
   { x:8.355231161, y:35.274333802 },
   { x:8.317404012, y:35.289474996 },
   { x:8.294356323, y:35.325080058 },
   { x:8.287948446, y:35.366059469 },
   { x:8.290015502, y:35.402594706 },
   { x:8.300867553, y:35.437476299 },
   { x:8.336730997, y:35.508376363 },
   { x:8.337041056, y:35.537935283 },
   { x:8.327225481, y:35.621405428 },
   { x:8.323605184, y:35.652191874 },
   { x:8.306551961, y:35.684903056 },
   { x:8.257666057, y:35.750325419 },
   { x:8.245780477, y:35.785310364 },
   { x:8.241439656, y:35.827736715 },
   { x:8.247227417, y:35.907318421 },
   { x:8.268423401, y:35.969863948 },
   { x:8.272445516, y:35.981732483 },
   { x:8.275649455, y:36.03681956 },
   { x:8.296733439, y:36.1104068 },
   { x:8.307998901, y:36.126994934 },
   { x:8.317093953, y:36.145908509 },
   { x:8.314510132, y:36.163943583 },
   { x:8.307068726, y:36.182495423 },
   { x:8.302314494, y:36.202339172 },
   { x:8.307068726, y:36.243628642 },
   { x:8.354404338, y:36.350908915 },
   { x:8.355423113, y:36.356115986 },
   { x:8.358125041, y:36.369925843 },
   { x:8.359675333, y:36.411215312 },
   { x:8.357711629, y:36.430387268 },
   { x:8.349236695, y:36.448784078 },
   { x:8.333837118, y:36.456380514 },
   { x:8.314923543, y:36.460617982 },
   { x:8.295596557, y:36.468679504 },
   { x:8.208780151, y:36.477826233 },
   { x:8.167852417, y:36.491365459 },
   { x:8.167890169, y:36.491994979 },
   { x:8.169919474, y:36.525833639 },
   { x:8.193483927, y:36.548984681 },
   { x:8.222319376, y:36.56376414 },
   { x:8.286914917, y:36.583401184 },
   { x:8.407941121, y:36.642622376 },
   { x:8.430368693, y:36.662621155 },
   { x:8.453209676, y:36.697657776 },
   { x:8.461787964, y:36.73279775 },
   { x:8.441634155, y:36.753209941 },
   { x:8.406700887, y:36.7679894 },
   { x:8.413108765, y:36.783905742 },
   { x:8.444011271, y:36.796204733 },
   { x:8.482665242, y:36.799977113 },
   { x:8.520078979, y:36.797910055 },
   { x:8.554495483, y:36.803646139 },
   { x:8.623845255, y:36.826073711 },
   { x:8.641725301, y:36.836357321 },
   { x:8.642552124, y:36.848501282 },
   { x:8.608238973, y:36.890720927 },
   { x:8.604828329, y:36.900978699 },
   { x:8.605655151, y:36.913045146 },
   { x:8.60251042864, y:36.9395107635 },
   { x:8.602549675, y:36.939520575 },
   { x:8.621104363, y:36.945786851 },
   { x:8.692149285, y:36.969387111 },
   { x:8.716563347, y:36.973089911 },
   { x:8.802012566, y:36.973089911 },
   { x:8.824392123, y:36.979478257 },
   { x:8.865733269, y:37.007635809 },
   { x:8.896006707, y:37.018866278 },
   { x:8.903656446, y:37.021673895 },
   { x:8.925791863, y:37.038885809 },
   { x:8.956879102, y:37.069281317 },
   { x:8.987640821, y:37.116848049 },
   { x:9.000987175, y:37.123968817 },
   { x:9.0107528, y:37.127834377 },
   { x:9.038747592, y:37.151841539 },
   { x:9.049327019, y:37.156968492 },
   { x:9.079437696, y:37.166815497 },
   { x:9.1591903, y:37.192816473 },
   { x:9.171397332, y:37.198797919 },
   { x:9.192393425, y:37.226141669 },
   { x:9.210703972, y:37.233832098 },
   { x:9.34253991, y:37.235337632 },
   { x:9.380707227, y:37.247463283 },
   { x:9.40512129, y:37.268500067 },
   { x:9.419118686, y:37.275824286 },
   { x:9.4326278, y:37.271389065 },
   { x:9.442881707, y:37.266546942 },
   { x:9.453868035, y:37.268296617 },
   { x:9.464528842, y:37.272447007 },
   { x:9.493907097, y:37.278143622 },
   { x:9.517344597, y:37.286688544 },
   { x:9.538584832, y:37.298000393 },
   { x:9.552744988, y:37.309515692 },
   { x:9.57309004, y:37.300238348 },
   { x:9.591481967, y:37.302923895 },
   { x:9.628428582, y:37.323146877 },
   { x:9.649261915, y:37.331854559 },
   { x:9.666270379, y:37.335435289 },
   { x:9.710297071, y:37.33616771 },
   { x:9.732432488, y:37.343329169 },
   { x:9.744639519, y:37.345200914 },
   { x:9.755137566, y:37.3399112 },
   { x:9.763194207, y:37.333644924 },
   { x:9.773448113, y:37.330511786 },
   { x:9.858897332, y:37.328802802 },
   { x:9.859060092, y:37.325873114 },
   { x:9.861175977, y:37.31635163 }
];
