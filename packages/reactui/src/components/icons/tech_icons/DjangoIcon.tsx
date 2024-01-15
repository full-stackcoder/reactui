import React from 'react'
import IconProps from '../../../utils/iconTypes'
import withLayout from '../../utils/withLayout'

const DjangoIcon = ({ className, ...props }: IconProps) => {
  const classNames = ['fscDjangoIcon', className && `${className}`].filter(Boolean).join(' ')
  return (
    <svg {...props} className={classNames} xmlns='http://www.w3.org/2000/svg' viewBox='100 0 600 600'>
      <title>Django Icon</title>
      <metadata>Created by Prashan Pudasaini on Thursday, January 4th, 2024 @ fullstackcoder.io</metadata>
      <path
        fill='transparent'
        opacity='1.000000'
        stroke='none'
        d='M513.000000,601.000000 
      C342.000000,601.000000 171.500000,601.000000 1.000000,601.000000 
      C1.000000,401.000000 1.000000,201.000000 1.000000,1.000000 
      C267.666656,1.000000 534.333313,1.000000 801.000000,1.000000 
      C801.000000,201.000000 801.000000,401.000000 801.000000,601.000000 
      C705.166687,601.000000 609.333313,601.000000 513.000000,601.000000 
      M580.999146,329.438171 
      C580.940796,326.606903 580.876709,323.775696 580.824951,320.944305 
      C580.563171,306.632629 580.282043,292.321198 580.066345,278.008789 
      C580.028625,275.506439 580.577698,273.650024 583.865723,273.262207 
      C585.554016,273.063080 587.614807,271.307831 588.479187,269.702301 
      C591.316650,264.431976 593.575439,258.853882 596.269531,253.501221 
      C598.025391,250.012833 597.194824,248.290161 593.357361,247.614548 
      C568.890808,243.307129 544.418091,241.387009 520.101807,248.277924 
      C508.886414,251.456253 498.639343,256.697052 491.103180,265.937561 
      C479.257477,280.462219 476.441498,297.215485 479.591217,315.310883 
      C481.422180,325.829803 485.864319,335.003571 494.048523,341.970093 
      C507.466278,353.391479 523.127563,354.833313 539.708252,351.585144 
      C541.887146,351.158264 544.066711,350.734924 546.323792,350.294800 
      C546.932861,364.145844 540.718262,373.037689 528.240967,375.862610 
      C514.414062,378.993103 501.124664,376.213440 488.193237,371.079498 
      C486.250122,370.308105 484.262695,369.648315 481.579132,368.677734 
      C481.337769,371.223572 481.047485,372.970795 481.028961,374.720917 
      C480.967133,380.553192 480.992554,386.386566 481.003540,392.219452 
      C481.019531,400.687683 481.025360,400.691650 489.300476,403.212555 
      C490.414459,403.551910 491.536316,404.035614 492.674377,404.099762 
      C504.608673,404.772247 516.544922,405.839355 528.484680,405.894226 
      C551.930420,406.002075 572.101318,390.503448 577.078796,367.518372 
      C579.696716,355.429108 579.771973,342.789154 580.999146,329.438171 
      M167.492645,353.000000 
      C177.586426,352.102997 187.714996,351.483398 197.763107,350.222443 
      C206.012604,349.187256 205.993652,348.849396 205.996689,340.382141 
      C206.007736,309.556366 206.002701,278.730621 206.001648,247.904861 
      C206.001144,232.908554 206.030029,217.912109 205.976654,202.915985 
      C205.954651,196.732803 205.254593,196.074524 199.001724,196.021515 
      C192.170547,195.963608 185.338333,195.973770 178.506943,196.014297 
      C171.597794,196.055267 171.043823,196.584961 171.016937,203.411377 
      C170.970352,215.241638 170.911713,227.072983 171.033310,238.902069 
      C171.071960,242.662277 169.952286,244.373825 165.855072,244.122040 
      C160.542862,243.795609 155.155823,243.603867 149.871460,244.101883 
      C130.973999,245.882843 116.060463,253.919098 106.732254,271.314453 
      C100.740242,282.488342 100.855171,294.307526 100.974319,306.332550 
      C101.159019,324.971802 112.036812,340.895355 129.186737,347.941467 
      C141.238327,352.892914 153.776703,353.407349 167.492645,353.000000 
      M691.589722,262.937256 
      C690.444702,261.514709 689.434692,259.953003 688.133972,258.690826 
      C672.147278,243.177338 652.934692,240.163773 632.124878,245.079559 
      C612.571350,249.698578 599.893921,262.145844 595.293518,281.687439 
      C593.379333,289.818298 592.976318,298.500397 593.188538,306.898926 
      C593.772095,329.988068 609.902283,348.996857 632.473328,353.462677 
      C638.772095,354.708893 645.425964,355.320282 651.801636,354.802795 
      C671.452454,353.207764 687.006836,345.001678 695.987854,326.283478 
      C701.043152,315.747223 700.995117,304.776062 701.059082,293.600098 
      C701.122253,282.577789 698.133972,272.614960 691.589722,262.937256 
      M406.000000,290.503784 
      C406.020081,286.504395 405.834473,282.488129 406.159729,278.513733 
      C406.293091,276.884521 407.156586,274.374023 408.325378,273.925507 
      C415.176880,271.296295 422.354767,270.595612 429.172150,273.792816 
      C434.926697,276.491577 435.026825,282.116028 435.014984,287.601562 
      C434.973969,306.599854 434.981293,325.598297 435.017731,344.596619 
      C435.030609,351.301514 435.637695,351.927246 442.016968,351.977966 
      C449.182495,352.034943 456.353119,351.838013 463.513428,352.039001 
      C468.212402,352.170929 470.070770,350.302673 470.042145,345.564240 
      C469.910187,323.733582 470.163391,301.899750 469.922943,280.070953 
      C469.709656,260.703735 459.443207,248.113632 440.228027,245.128845 
      C418.554108,241.762146 397.073486,244.426010 375.947632,250.065979 
      C372.707397,250.931015 372.026825,253.269852 372.027527,256.170990 
      C372.034698,286.168304 372.061432,316.165680 371.986877,346.162811 
      C371.976105,350.500336 373.932434,352.093597 378.084290,352.016205 
      C385.081146,351.885803 392.082733,352.035278 399.081573,351.976379 
      C405.264709,351.924347 405.959259,351.249603 405.975830,344.997925 
      C406.023041,327.166229 405.997131,309.334351 406.000000,290.503784 
      M276.037964,274.995026 
      C276.028748,278.985870 277.698425,280.038177 281.397339,278.345428 
      C284.415985,276.963989 287.510620,275.449707 290.729919,274.862823 
      C299.662628,273.234222 308.648285,271.323669 317.670929,270.959686 
      C323.806976,270.712219 326.222260,274.369751 325.801453,279.903046 
      C325.389740,285.317017 320.767944,284.146698 317.472778,284.961578 
      C307.655151,287.389557 297.430725,288.757965 288.085541,292.392365 
      C266.951843,300.611450 261.772766,331.124878 278.558868,345.938110 
      C286.008484,352.512238 295.541199,353.940796 304.819763,353.776001 
      C320.423431,353.498810 336.003662,351.951355 351.596649,350.985626 
      C355.632477,350.735657 356.996155,348.470123 356.988892,344.711334 
      C356.940582,319.720093 357.158234,294.726227 356.855530,269.738495 
      C356.707947,257.554382 350.537964,249.275314 338.812592,246.246429 
      C318.428497,240.980835 298.515594,243.764008 279.376984,252.094406 
      C277.771576,252.793182 276.359039,255.660004 276.200378,257.627899 
      C275.759857,263.091217 276.028656,268.611755 276.037964,274.995026 
      M231.598328,393.135101 
      C246.323029,383.631042 254.588196,369.892090 255.902588,352.686310 
      C257.295105,334.458344 257.564423,316.133026 257.936646,297.842316 
      C258.245117,282.684143 257.983368,267.514526 257.990051,252.349960 
      C257.991455,249.129318 257.681610,246.116287 253.430069,246.094421 
      C244.766006,246.049866 236.091553,245.877167 227.446594,246.287979 
      C225.930161,246.360046 224.005142,248.790375 223.239182,250.553207 
      C222.503952,252.245377 223.025009,254.485107 223.000809,256.484283 
      C222.662155,284.457825 222.656464,312.440796 221.858734,340.401215 
      C221.402084,356.406464 214.477325,369.236816 199.874222,377.160614 
      C197.079208,378.677216 194.445999,380.492035 190.640747,382.848969 
      C199.564926,387.236694 207.420578,390.782471 214.959473,394.907257 
      C220.836868,398.122986 225.960587,397.703430 231.598328,393.135101 
      M223.000015,210.509949 
      C223.017654,215.669708 223.049515,220.829483 223.047760,225.989243 
      C223.046646,229.249374 224.587387,230.945618 227.899643,230.945236 
      C236.221756,230.944260 244.543976,230.926849 252.865936,230.963272 
      C256.432739,230.978867 257.987885,229.215286 257.970490,225.727066 
      C257.929810,217.571503 257.915070,209.415283 257.975189,201.259964 
      C258.003876,197.368347 255.988083,195.963791 252.351089,196.010056 
      C247.025742,196.077820 241.698593,195.988480 236.372330,196.004120 
      C221.692749,196.047256 223.064117,194.748886 223.000015,210.509949 z'
      />
      <path
        fill='#092E20'
        opacity='1.000000'
        stroke='none'
        d='M580.997314,329.918030 
      C579.771973,342.789154 579.696716,355.429108 577.078796,367.518372 
      C572.101318,390.503448 551.930420,406.002075 528.484680,405.894226 
      C516.544922,405.839355 504.608673,404.772247 492.674377,404.099762 
      C491.536316,404.035614 490.414459,403.551910 489.300476,403.212555 
      C481.025360,400.691650 481.019531,400.687683 481.003540,392.219452 
      C480.992554,386.386566 480.967133,380.553192 481.028961,374.720917 
      C481.047485,372.970795 481.337769,371.223572 481.579132,368.677734 
      C484.262695,369.648315 486.250122,370.308105 488.193237,371.079498 
      C501.124664,376.213440 514.414062,378.993103 528.240967,375.862610 
      C540.718262,373.037689 546.932861,364.145844 546.323792,350.294800 
      C544.066711,350.734924 541.887146,351.158264 539.708252,351.585144 
      C523.127563,354.833313 507.466278,353.391479 494.048523,341.970093 
      C485.864319,335.003571 481.422180,325.829803 479.591217,315.310883 
      C476.441498,297.215485 479.257477,280.462219 491.103180,265.937561 
      C498.639343,256.697052 508.886414,251.456253 520.101807,248.277924 
      C544.418091,241.387009 568.890808,243.307129 593.357361,247.614548 
      C597.194824,248.290161 598.025391,250.012833 596.269531,253.501221 
      C593.575439,258.853882 591.316650,264.431976 588.479187,269.702301 
      C587.614807,271.307831 585.554016,273.063080 583.865723,273.262207 
      C580.577698,273.650024 580.028625,275.506439 580.066345,278.008789 
      C580.282043,292.321198 580.563171,306.632629 580.824951,320.944305 
      C580.876709,323.775696 580.940796,326.606903 580.997314,329.918030 
      M546.996887,315.327942 
      C546.653137,302.721893 546.291138,290.116333 545.979126,277.509491 
      C545.905579,274.538696 545.214233,272.042175 541.633179,272.136414 
      C527.958313,272.496155 515.241028,279.236450 514.083374,295.732849 
      C513.886108,298.543335 513.934143,301.385284 514.072388,304.202698 
      C514.760315,318.221558 526.303589,326.980774 540.176697,324.537292 
      C545.274353,323.639404 547.578308,321.387665 546.996887,315.327942 z'
      />
      <path
        fill='#092E20'
        opacity='1.000000'
        stroke='none'
        d='M166.993927,353.000000 
      C153.776703,353.407349 141.238327,352.892914 129.186737,347.941467 
      C112.036812,340.895355 101.159019,324.971802 100.974319,306.332550 
      C100.855171,294.307526 100.740242,282.488342 106.732254,271.314453 
      C116.060463,253.919098 130.973999,245.882843 149.871460,244.101883 
      C155.155823,243.603867 160.542862,243.795609 165.855072,244.122040 
      C169.952286,244.373825 171.071960,242.662277 171.033310,238.902069 
      C170.911713,227.072983 170.970352,215.241638 171.016937,203.411377 
      C171.043823,196.584961 171.597794,196.055267 178.506943,196.014297 
      C185.338333,195.973770 192.170547,195.963608 199.001724,196.021515 
      C205.254593,196.074524 205.954651,196.732803 205.976654,202.915985 
      C206.030029,217.912109 206.001144,232.908554 206.001648,247.904861 
      C206.002701,278.730621 206.007736,309.556366 205.996689,340.382141 
      C205.993652,348.849396 206.012604,349.187256 197.763107,350.222443 
      C187.714996,351.483398 177.586426,352.102997 166.993927,353.000000 
      M171.000000,310.489746 
      C170.990906,299.848328 170.964127,289.206848 170.984375,278.565491 
      C170.989883,275.674164 170.429199,273.009399 167.139542,272.476410 
      C154.807434,270.478302 141.600739,273.271179 137.309540,288.148346 
      C135.876144,293.117737 135.997635,298.664917 136.128601,303.930084 
      C136.425720,315.875122 145.190018,324.631805 157.157990,324.905212 
      C172.646866,325.259033 170.890411,325.878448 170.999847,311.981964 
      C171.001160,311.815704 171.000000,311.649414 171.000000,310.489746 z'
      />
      <path
        fill='#092E20'
        opacity='1.000000'
        stroke='none'
        d='M691.800781,263.230591 
      C698.133972,272.614960 701.122253,282.577789 701.059082,293.600098 
      C700.995117,304.776062 701.043152,315.747223 695.987854,326.283478 
      C687.006836,345.001678 671.452454,353.207764 651.801636,354.802795 
      C645.425964,355.320282 638.772095,354.708893 632.473328,353.462677 
      C609.902283,348.996857 593.772095,329.988068 593.188538,306.898926 
      C592.976318,298.500397 593.379333,289.818298 595.293518,281.687439 
      C599.893921,262.145844 612.571350,249.698578 632.124878,245.079559 
      C652.934692,240.163773 672.147278,243.177338 688.133972,258.690826 
      C689.434692,259.953003 690.444702,261.514709 691.800781,263.230591 
      M631.274902,316.012604 
      C635.054565,323.376495 641.010193,327.429779 649.349304,326.686218 
      C657.334839,325.974213 662.848022,320.464050 664.843628,311.303040 
      C666.806641,302.291321 666.975281,293.157959 664.148071,284.230316 
      C661.704468,276.513885 654.996460,271.344391 647.677734,271.222046 
      C640.202576,271.097137 633.483154,275.925507 630.696167,283.622864 
      C626.866577,294.200256 627.050598,304.777191 631.274902,316.012604 z'
      />
      <path
        fill='#092E20'
        opacity='1.000000'
        stroke='none'
        d='M406.000000,291.003174 
      C405.997131,309.334351 406.023041,327.166229 405.975830,344.997925 
      C405.959259,351.249603 405.264709,351.924347 399.081573,351.976379 
      C392.082733,352.035278 385.081146,351.885803 378.084290,352.016205 
      C373.932434,352.093597 371.976105,350.500336 371.986877,346.162811 
      C372.061432,316.165680 372.034698,286.168304 372.027527,256.170990 
      C372.026825,253.269852 372.707397,250.931015 375.947632,250.065979 
      C397.073486,244.426010 418.554108,241.762146 440.228027,245.128845 
      C459.443207,248.113632 469.709656,260.703735 469.922943,280.070953 
      C470.163391,301.899750 469.910187,323.733582 470.042145,345.564240 
      C470.070770,350.302673 468.212402,352.170929 463.513428,352.039001 
      C456.353119,351.838013 449.182495,352.034943 442.016968,351.977966 
      C435.637695,351.927246 435.030609,351.301514 435.017731,344.596619 
      C434.981293,325.598297 434.973969,306.599854 435.014984,287.601562 
      C435.026825,282.116028 434.926697,276.491577 429.172150,273.792816 
      C422.354767,270.595612 415.176880,271.296295 408.325378,273.925507 
      C407.156586,274.374023 406.293091,276.884521 406.159729,278.513733 
      C405.834473,282.488129 406.020081,286.504395 406.000000,291.003174 z'
      />
      <path
        fill='#092E20'
        opacity='1.000000'
        stroke='none'
        d='M276.027588,274.552368 
      C276.028656,268.611755 275.759857,263.091217 276.200378,257.627899 
      C276.359039,255.660004 277.771576,252.793182 279.376984,252.094406 
      C298.515594,243.764008 318.428497,240.980835 338.812592,246.246429 
      C350.537964,249.275314 356.707947,257.554382 356.855530,269.738495 
      C357.158234,294.726227 356.940582,319.720093 356.988892,344.711334 
      C356.996155,348.470123 355.632477,350.735657 351.596649,350.985626 
      C336.003662,351.951355 320.423431,353.498810 304.819763,353.776001 
      C295.541199,353.940796 286.008484,352.512238 278.558868,345.938110 
      C261.772766,331.124878 266.951843,300.611450 288.085541,292.392365 
      C297.430725,288.757965 307.655151,287.389557 317.472778,284.961578 
      C320.767944,284.146698 325.389740,285.317017 325.801453,279.903046 
      C326.222260,274.369751 323.806976,270.712219 317.670929,270.959686 
      C308.648285,271.323669 299.662628,273.234222 290.729919,274.862823 
      C287.510620,275.449707 284.415985,276.963989 281.397339,278.345428 
      C277.698425,280.038177 276.028748,278.985870 276.027588,274.552368 
      M304.227722,327.523132 
      C311.230927,329.896576 318.213867,329.674042 325.180481,327.359741 
      C325.769775,322.561401 326.362671,317.763489 326.940247,312.963745 
      C326.979279,312.639648 327.036255,312.159088 326.858673,311.992676 
      C325.466614,310.688049 323.816772,308.195831 322.623383,308.389709 
      C316.771759,309.340515 310.782135,310.381561 305.327637,312.591278 
      C298.953888,315.173431 298.403656,322.304688 304.227722,327.523132 z'
      />
      <path
        fill='#092E20'
        opacity='1.000000'
        stroke='none'
        d='M231.286102,393.321533 
      C225.960587,397.703430 220.836868,398.122986 214.959473,394.907257 
      C207.420578,390.782471 199.564926,387.236694 190.640747,382.848969 
      C194.445999,380.492035 197.079208,378.677216 199.874222,377.160614 
      C214.477325,369.236816 221.402084,356.406464 221.858734,340.401215 
      C222.656464,312.440796 222.662155,284.457825 223.000809,256.484283 
      C223.025009,254.485107 222.503952,252.245377 223.239182,250.553207 
      C224.005142,248.790375 225.930161,246.360046 227.446594,246.287979 
      C236.091553,245.877167 244.766006,246.049866 253.430069,246.094421 
      C257.681610,246.116287 257.991455,249.129318 257.990051,252.349960 
      C257.983368,267.514526 258.245117,282.684143 257.936646,297.842316 
      C257.564423,316.133026 257.295105,334.458344 255.902588,352.686310 
      C254.588196,369.892090 246.323029,383.631042 231.286102,393.321533 z'
      />
      <path
        fill='#092E20'
        opacity='1.000000'
        stroke='none'
        d='M223.000000,210.013290 
      C223.064117,194.748886 221.692749,196.047256 236.372330,196.004120 
      C241.698593,195.988480 247.025742,196.077820 252.351089,196.010056 
      C255.988083,195.963791 258.003876,197.368347 257.975189,201.259964 
      C257.915070,209.415283 257.929810,217.571503 257.970490,225.727066 
      C257.987885,229.215286 256.432739,230.978867 252.865936,230.963272 
      C244.543976,230.926849 236.221756,230.944260 227.899643,230.945236 
      C224.587387,230.945618 223.046646,229.249374 223.047760,225.989243 
      C223.049515,220.829483 223.017654,215.669708 223.000000,210.013290 z'
      />
      <path
        fill='transparent'
        opacity='1.000000'
        stroke='none'
        d='M546.994507,315.798523 
      C547.578308,321.387665 545.274353,323.639404 540.176697,324.537292 
      C526.303589,326.980774 514.760315,318.221558 514.072388,304.202698 
      C513.934143,301.385284 513.886108,298.543335 514.083374,295.732849 
      C515.241028,279.236450 527.958313,272.496155 541.633179,272.136414 
      C545.214233,272.042175 545.905579,274.538696 545.979126,277.509491 
      C546.291138,290.116333 546.653137,302.721893 546.994507,315.798523 z'
      />
      <path
        fill='transparent'
        opacity='1.000000'
        stroke='none'
        d='M171.000000,310.986450 
      C171.000000,311.649414 171.001160,311.815704 170.999847,311.981964 
      C170.890411,325.878448 172.646866,325.259033 157.157990,324.905212 
      C145.190018,324.631805 136.425720,315.875122 136.128601,303.930084 
      C135.997635,298.664917 135.876144,293.117737 137.309540,288.148346 
      C141.600739,273.271179 154.807434,270.478302 167.139542,272.476410 
      C170.429199,273.009399 170.989883,275.674164 170.984375,278.565491 
      C170.964127,289.206848 170.990906,299.848328 171.000000,310.986450 z'
      />
      <path
        fill='transparent'
        opacity='1.000000'
        stroke='none'
        d='M631.143311,315.654724 
      C627.050598,304.777191 626.866577,294.200256 630.696167,283.622864 
      C633.483154,275.925507 640.202576,271.097137 647.677734,271.222046 
      C654.996460,271.344391 661.704468,276.513885 664.148071,284.230316 
      C666.975281,293.157959 666.806641,302.291321 664.843628,311.303040 
      C662.848022,320.464050 657.334839,325.974213 649.349304,326.686218 
      C641.010193,327.429779 635.054565,323.376495 631.143311,315.654724 z'
      />
      <path
        fill='transparent'
        opacity='1.000000'
        stroke='none'
        d='M303.888123,327.321533 
      C298.403656,322.304688 298.953888,315.173431 305.327637,312.591278 
      C310.782135,310.381561 316.771759,309.340515 322.623383,308.389709 
      C323.816772,308.195831 325.466614,310.688049 326.858673,311.992676 
      C327.036255,312.159088 326.979279,312.639648 326.940247,312.963745 
      C326.362671,317.763489 325.769775,322.561401 325.180481,327.359741 
      C318.213867,329.674042 311.230927,329.896576 303.888123,327.321533 z'
      />
    </svg>
  )
}

export default withLayout(DjangoIcon)
