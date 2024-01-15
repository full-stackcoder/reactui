import React from 'react'
import IconProps from '../../../utils/iconTypes'
import withLayout from '../../utils/withLayout'

const GithubIcon = ({ fill, className, ...props }: IconProps) => {
  const classNames = ['fscGithubIcon', className && `${className}`].filter(Boolean).join(' ')
  return (
    <svg
      {...props}
      className={classNames}
      version='1.0'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 900.000000 900.000000'
      preserveAspectRatio='xMidYMid meet'
    >
      <title>Github Icon</title>
      <metadata>Created by Prashan Pudasaini on Thursday, January 4th, 2024 @ fullstackcoder.io</metadata>
      <g transform='translate(0.000000,900.000000) scale(0.100000,-0.100000)' fill={fill} stroke='none'>
        {' '}
        <path d='M4120 8788 c-312 -25 -642 -87 -925 -173 -22 -6 -67 -20 -100 -30 -57 -16 -77 -23 -175 -60 -22 -8 -57 -21 -77 -29 -157 -59 -445 -194 -568 -267 -27 -17 -63 -37 -80 -45 -34 -16 -196 -119 -282 -179 -137 -94 -330 -246 -459 -360 -87 -77 -329 -325 -404 -415 -30 -36 -58 -67 -61 -70 -3 -3 -53 -68 -111 -145 -107 -143 -222 -313 -300 -446 -85 -145 -254 -496 -288 -599 -5 -14 -18 -50 -30 -80 -123 -318 -218 -738 -251 -1105 -13 -147 -6 -775 10 -915 11 -93 35 -250 50 -320 6 -25 18 -81 27 -125 9 -44 22 -100 29 -125 7 -25 20 -74 30 -110 9 -36 23 -81 30 -100 6 -19 20 -60 29 -90 9 -30 23 -71 30 -90 8 -19 21 -53 29 -75 79 -210 282 -627 333 -686 8 -8 14 -19 14 -23 0 -27 244 -368 405 -567 68 -85 401 -421 489 -495 32 -27 75 -63 95 -80 114 -97 436 -323 548 -384 21 -12 52 -30 68 -40 138 -86 430 -224 635 -300 204 -76 217 -80 280 -80 74 0 124 18 165 57 75 72 79 113 68 578 l-8 320 -60 -3 c-33 -2 -100 -10 -150 -18 -182 -29 -493 -11 -635 37 -193 65 -308 130 -424 239 -102 96 -187 214 -230 320 -34 83 -44 105 -82 180 -52 104 -53 106 -112 193 -72 105 -189 220 -297 292 -210 140 -245 226 -110 268 131 41 339 -11 510 -126 80 -54 201 -175 264 -265 28 -39 51 -75 51 -78 0 -12 121 -162 166 -206 103 -100 238 -181 356 -214 180 -51 410 -41 623 26 147 47 138 40 158 116 37 147 52 192 85 263 45 97 76 145 131 203 29 31 42 51 35 58 -5 5 -43 14 -84 20 -217 32 -309 49 -455 86 -136 35 -205 57 -283 90 -18 8 -37 14 -43 14 -10 0 -247 115 -294 143 -121 71 -285 205 -379 308 -175 192 -315 456 -389 734 -116 433 -130 985 -32 1280 8 22 16 55 20 72 4 18 11 35 16 38 5 4 9 15 9 27 0 11 6 32 14 46 8 15 29 59 47 97 18 39 44 88 58 110 14 22 30 48 36 57 31 52 93 136 141 192 l54 64 -24 74 c-52 160 -60 221 -60 433 0 202 8 264 51 430 38 148 72 228 98 239 64 24 334 -21 495 -84 30 -12 66 -25 80 -29 29 -9 197 -86 220 -101 8 -5 35 -19 60 -31 25 -13 105 -59 178 -103 74 -45 143 -87 155 -94 24 -13 69 -9 152 13 76 21 191 45 211 45 11 0 51 6 89 14 187 39 342 50 705 50 277 0 382 -4 480 -17 220 -30 385 -59 515 -92 118 -30 121 -30 197 17 38 24 81 51 96 60 15 10 34 21 42 25 8 3 32 17 54 31 56 35 280 145 366 180 187 76 378 122 506 122 56 0 68 -4 89 -25 14 -13 25 -31 25 -39 0 -9 6 -30 14 -48 8 -18 21 -58 30 -88 93 -328 93 -648 -2 -932 l-15 -46 75 -94 c133 -165 237 -354 297 -536 65 -199 81 -319 81 -605 0 -254 -14 -420 -46 -549 -8 -32 -14 -66 -14 -77 0 -10 -7 -43 -16 -72 -8 -30 -22 -79 -31 -109 -67 -240 -197 -476 -368 -673 -93 -108 -330 -295 -426 -337 -13 -6 -42 -20 -64 -33 -38 -21 -161 -75 -235 -102 -19 -7 -53 -20 -75 -28 -37 -14 -85 -28 -220 -63 -120 -31 -342 -71 -448 -80 -45 -4 -70 -11 -74 -20 -3 -7 17 -39 44 -71 58 -70 64 -79 107 -168 61 -125 85 -206 111 -373 13 -86 16 -208 15 -791 -2 -672 -1 -689 19 -728 26 -52 74 -87 139 -103 77 -18 156 -2 342 70 30 12 69 26 87 31 18 5 35 14 38 19 4 6 13 10 21 10 24 0 353 158 469 225 39 23 77 44 85 48 8 4 29 16 45 27 17 11 37 23 45 27 67 35 378 257 498 356 155 129 341 309 494 477 83 92 110 124 221 270 96 125 136 184 225 326 24 38 47 76 52 84 80 126 280 531 280 564 0 8 4 17 10 21 5 3 14 20 19 38 5 18 19 57 31 87 23 61 52 147 76 230 9 30 21 66 25 80 14 40 41 142 49 185 4 22 12 60 18 85 30 122 69 368 77 480 4 58 10 89 20 96 13 10 15 65 15 363 0 275 -3 350 -12 348 -9 -1 -15 25 -21 88 -27 319 -130 759 -247 1065 -12 30 -25 66 -30 80 -27 83 -185 415 -254 535 -19 33 -44 78 -56 100 -97 176 -358 528 -535 720 -320 348 -650 617 -1035 845 -210 124 -473 251 -672 326 -95 35 -125 47 -156 60 -18 8 -39 14 -47 14 -8 0 -29 6 -47 14 -48 20 -207 65 -313 89 -238 53 -321 69 -495 92 -267 35 -691 45 -960 23z' />{' '}
      </g>
    </svg>
  )
}

export default withLayout(GithubIcon)
