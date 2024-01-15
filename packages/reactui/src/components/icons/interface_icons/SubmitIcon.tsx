import React from 'react'
import IconProps from '../../../utils/iconTypes'
import withLayout from '../../utils/withLayout'

const OutlinedIcon = ({ fill, className, ...props }: IconProps) => {
  const classNames = ['fscSubmit_outlinedIcon', className && `${className}`].filter(Boolean).join(' ')
  return (
    <svg {...props} className={classNames} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 1200'>
      <title>Submit Outlined Icon</title>
      <metadata>Created by Prashan Pudasaini on Thursday, January 4th, 2024 @ fullstackcoder.io</metadata>
      <g transform='translate(100, 1070) scale(0.100000,-0.100000)' fill={fill} stroke='none'>
        <path
          d='M8620 8988 c0 -7 -53 -39 -118 -71 -64 -32 -160 -81 -212 -109 -52
-28 -149 -78 -215 -113 -66 -34 -158 -83 -205 -107 -47 -25 -152 -80 -235
-123 -82 -43 -188 -98 -235 -123 -47 -24 -155 -81 -240 -125 -85 -44 -194
-101 -242 -126 -48 -25 -138 -72 -200 -105 -62 -32 -162 -84 -223 -116 -60
-32 -164 -86 -230 -120 -171 -89 -324 -169 -445 -232 -58 -31 -159 -84 -225
-118 -66 -34 -167 -87 -225 -118 -58 -30 -154 -80 -215 -112 -60 -32 -168 -87
-238 -124 -70 -37 -167 -87 -215 -113 -95 -50 -239 -125 -432 -225 -171 -89
-407 -212 -515 -269 -49 -26 -128 -67 -175 -91 -47 -25 -143 -75 -215 -113
-71 -37 -179 -93 -240 -125 -60 -31 -155 -81 -209 -110 -55 -28 -106 -56 -115
-60 -9 -5 -23 -11 -31 -14 -8 -4 -44 -22 -80 -42 -36 -19 -135 -72 -220 -116
-450 -235 -578 -301 -705 -368 -60 -32 -161 -84 -223 -116 -62 -33 -152 -80
-200 -105 -48 -25 -152 -80 -232 -121 -291 -151 -377 -196 -475 -248 -55 -29
-149 -79 -210 -110 -273 -142 -312 -164 -349 -199 -55 -52 -76 -107 -76 -201
0 -89 9 -116 58 -178 41 -51 132 -96 287 -142 17 -5 116 -39 220 -75 105 -37
204 -70 220 -75 42 -13 206 -69 230 -80 11 -4 29 -11 40 -14 11 -3 47 -15 80
-26 33 -12 74 -26 90 -30 17 -5 75 -25 130 -45 55 -20 114 -40 131 -44 18 -5
37 -12 44 -16 7 -4 26 -11 44 -16 17 -4 96 -31 176 -59 80 -28 159 -55 175
-60 17 -5 95 -32 175 -60 80 -28 159 -55 175 -60 17 -5 77 -25 134 -44 57 -20
109 -36 115 -36 6 0 29 16 51 36 22 20 60 52 85 72 25 20 53 45 63 54 16 16
109 96 300 257 49 41 120 102 177 152 32 28 236 201 303 258 29 24 77 65 107
91 30 27 204 175 385 330 182 155 341 292 355 304 71 61 393 336 435 371 27
22 71 60 98 85 27 25 63 55 80 67 17 13 33 27 36 31 3 5 65 57 136 117 72 60
132 111 135 115 3 3 34 30 70 60 36 31 76 65 90 77 14 12 237 202 495 423 259
221 481 412 495 424 32 27 176 150 215 183 17 15 73 62 125 107 52 45 105 90
119 101 13 11 29 25 35 30 18 17 139 120 170 146 16 13 34 29 40 34 6 6 56 49
111 95 55 47 105 90 110 96 19 21 86 67 90 62 5 -4 -59 -95 -75 -108 -8 -6
-146 -171 -205 -245 -22 -28 -44 -55 -50 -61 -5 -6 -28 -32 -50 -59 -22 -26
-56 -67 -75 -90 -19 -23 -60 -72 -90 -109 -30 -38 -207 -251 -393 -474 -520
-626 -520 -626 -637 -768 -35 -44 -67 -81 -70 -84 -4 -3 -37 -43 -76 -90 -106
-130 -107 -131 -139 -169 -17 -20 -47 -56 -67 -81 -20 -25 -47 -57 -60 -71
-13 -15 -70 -84 -128 -154 -215 -261 -523 -632 -568 -684 -26 -30 -58 -69 -72
-87 -34 -44 -98 -122 -135 -164 -16 -20 -48 -57 -70 -84 -22 -27 -45 -54 -50
-60 -9 -9 -36 -43 -116 -141 -10 -11 -34 -41 -55 -66 -22 -26 -76 -91 -121
-145 -45 -55 -168 -202 -273 -328 -104 -126 -190 -233 -190 -237 0 -4 4 -11
10 -14 14 -8 139 -55 175 -65 17 -5 46 -14 65 -21 84 -29 141 -49 290 -99 63
-22 201 -69 305 -106 105 -36 204 -69 220 -74 17 -5 95 -32 175 -60 80 -28
159 -55 176 -59 18 -5 37 -12 44 -16 7 -4 26 -11 44 -16 17 -4 76 -24 131 -44
55 -20 114 -40 131 -44 18 -5 37 -12 44 -16 7 -4 26 -11 44 -16 17 -4 96 -31
176 -59 80 -28 159 -55 175 -60 17 -5 116 -38 220 -75 105 -36 204 -70 221
-74 18 -5 37 -12 44 -16 7 -4 26 -11 44 -16 17 -4 76 -24 131 -44 55 -20 114
-40 130 -45 17 -5 116 -38 220 -75 229 -79 479 -164 634 -217 128 -42 183 -47
251 -20 65 25 96 48 133 101 35 47 67 150 67 212 0 18 7 73 15 123 21 122 41
248 60 381 9 61 22 154 30 207 8 54 22 142 30 195 8 54 19 130 25 168 6 39 15
106 21 150 5 44 14 96 19 115 6 19 10 50 10 69 0 19 7 73 15 120 8 47 21 133
30 191 9 58 22 146 30 195 7 50 21 144 30 210 9 66 23 154 31 195 8 42 14 88
14 103 0 14 6 62 14 104 8 43 22 132 31 198 9 66 23 161 30 210 8 50 21 137
30 195 9 58 22 144 30 191 8 47 15 98 15 114 0 16 7 67 15 114 8 47 21 132 30
189 8 56 22 148 30 205 9 56 22 141 30 188 8 47 15 98 15 114 0 15 7 64 15
109 14 80 29 177 60 391 9 61 22 154 30 208 8 53 22 142 30 197 8 55 22 144
30 198 8 53 21 147 30 207 9 61 22 153 30 205 8 52 22 142 30 200 9 58 22 148
30 200 8 52 21 142 30 200 8 58 22 148 30 200 8 52 17 121 21 153 4 40 10 57
20 57 11 0 14 21 14 106 0 69 -4 103 -10 99 -6 -4 -17 10 -26 30 -19 47 -92
120 -139 139 -20 9 -34 20 -30 26 4 6 -25 10 -84 10 -66 0 -91 -3 -91 -12z'
        />
        <path
          d='M3277 2373 c-4 -3 -7 -400 -7 -881 0 -982 -3 -942 72 -1027 64 -72
106 -90 213 -90 81 0 95 3 139 30 52 30 86 74 526 675 85 116 160 217 165 223
6 7 26 35 45 62 19 28 105 145 192 261 87 117 158 219 158 228 0 9 -8 19 -17
22 -10 3 -34 11 -53 18 -68 25 -105 38 -135 46 -16 5 -75 25 -130 45 -55 20
-114 40 -131 44 -18 5 -37 12 -44 16 -7 4 -26 11 -44 16 -17 4 -96 31 -176 59
-80 28 -217 75 -305 104 -88 30 -171 58 -185 64 -42 16 -93 33 -125 42 -16 5
-57 18 -89 29 -68 24 -61 23 -69 14z'
        />
      </g>
    </svg>
  )
}

const SubmitOutlinedIcon = withLayout(OutlinedIcon)

export { SubmitOutlinedIcon }