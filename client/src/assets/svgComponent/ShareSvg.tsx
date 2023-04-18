import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
import { COLORS } from '../../constants/theme'
const ShareSvg = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={50}
        viewBox="0 0 24 24"
        fill={COLORS.light}
        {...props}
    >
        <Path d="M20 0c-2.21 0-4 1.79-4 4 0 .277.04.55.094.813L7 9.375A3.965 3.965 0 0 0 4 8c-2.21 0-4 1.79-4 4s1.79 4 4 4a3.965 3.965 0 0 0 3-1.375l9.094 4.563A3.984 3.984 0 0 0 16 20c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4a3.965 3.965 0 0 0-3 1.375l-9.094-4.563C7.961 12.552 8 12.277 8 12s-.04-.55-.094-.813L17 6.625A3.965 3.965 0 0 0 20 8c2.21 0 4-1.79 4-4s-1.79-4-4-4Z" />
    </Svg>
)
export default ShareSvg
