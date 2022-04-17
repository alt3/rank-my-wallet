import { chakra, HTMLChakraProps } from "@chakra-ui/react"

export const StarfishIcon = (props: HTMLChakraProps<"svg">) => {
  const class1Fill = "" //"#a6dcf7"
  const class2Opacity = "0.5"
  const class3Fill = "#fff"
  const class4Fill = "#8bd0f7"
  const class5Opacity = "0.7"
  const class6Fill = "#e95a6b"
  const class7Opacity = "0.2"
  const class8Fill = "#3f456b"

  return (
    <chakra.svg
      viewBox="0 0 512 512"
      fill="none"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <g id="Colors">
        <path
          fill={class1Fill}
          d="M104.08,196c9.86-18.05,7.29-39.11,9.67-58.76,2.15-17.78,8.91-33.6,18.55-48.76,52.16-82,170.66-97.84,241.49-30,48.47,46.44,48.91,102.69,41,164-1.65,12.75-.68,26.72,7.31,36.82,5.69,7.21,14.2,11.53,21.89,16.58,37.21,24.4,57.85,69.61,53,113.51C490.37,449.91,437.42,497,376.23,497a122.32,122.32,0,0,1-66.56-19.71,72.58,72.58,0,0,0-32.24-11.51c-9.91-1-24.92-.77-33.19,5.57-18.08,13.87-42.64,20.23-65.26,22.1q-6.43.54-12.88.53C21.27,494-39.82,302.71,78.52,220.57c8.42-5.85,17.08-11.83,22.91-20.24A47.05,47.05,0,0,0,104.08,196Z"
        />
        <g opacity={class2Opacity}>
          {/* <path
            fill={class3Fill}
            d="M86,362a29.76,29.76,0,0,1-27.82-19.77,5,5,0,0,1,9.37-3.5C72.81,352.89,86.65,352,86.79,352a5,5,0,0,1,.76,10C87.06,362,86.53,362,86,362Z"
          /> */}
          {/* <path
            fill={class3Fill}
            d="M39.7,362c-.56,0-1.09,0-1.58-.06a5,5,0,1,1,.76-10,19.74,19.74,0,0,0,19.27-13.24,5,5,0,0,1,9.37,3.5A29.76,29.76,0,0,1,39.7,362Z"
          />
          <path
            fill={class3Fill}
            d="M134.64,362a29.75,29.75,0,0,1-27.82-19.77,5,5,0,0,1,9.37-3.5c5.29,14.14,19.13,13.25,19.27,13.24a5,5,0,0,1,.76,10C135.73,362,135.2,362,134.64,362Z"
          />
          <path
            fill={class3Fill}
            d="M88.36,362c-.55,0-1.08,0-1.57-.06a5,5,0,0,1,.73-10,19.76,19.76,0,0,0,19.3-13.24,5,5,0,0,1,9.37,3.5A29.76,29.76,0,0,1,88.36,362Z"
          />
          <path
            fill={class3Fill}
            d="M110.31,400a29.75,29.75,0,0,1-27.82-19.77,5,5,0,0,1,9.37-3.5C97.15,390.89,111,390,111.13,390a5,5,0,0,1,.76,10C111.4,400,110.87,400,110.31,400Z"
          />
          <path
            fill={class3Fill}
            d="M64,400c-.55,0-1.08,0-1.57-.06a5,5,0,0,1,.73-10,19.76,19.76,0,0,0,19.3-13.24,5,5,0,0,1,9.37,3.5A29.76,29.76,0,0,1,64,400Z"
          /> */}
          {/* <path
            fill={class3Fill}
            d="M366.31,101a29.75,29.75,0,0,1-27.82-19.77,5,5,0,0,1,9.37-3.5C353.15,91.89,367,91,367.13,91a5,5,0,0,1,.76,10C367.4,101,366.87,101,366.31,101Z"
          />
          <path
            fill={class3Fill}
            d="M320,101c-.55,0-1.08,0-1.57-.06a5,5,0,0,1,.73-10,19.78,19.78,0,0,0,19.3-13.24,5,5,0,0,1,9.37,3.5A29.76,29.76,0,0,1,320,101Z"
          /> */}
        </g>
        {/* <circle fill={class4Fill} cx="448.78" cy="51.65" r="24" />
        <g opacity={class5Opacity}>
          <path
            fill={class3Fill}
            d="M437.73,56.63a10.77,10.77,0,1,1,14.08-5.83A10.76,10.76,0,0,1,437.73,56.63Z"
          />
        </g> */}
        {/* <circle fill={class4Fill} cx="103.78" cy="127.65" r="24" />
        <g opacity={class5Opacity}>
          <path
            fill={class3Fill}
            d="M92.73,132.63a10.77,10.77,0,1,1,14.08-5.83A10.76,10.76,0,0,1,92.73,132.63Z"
          />
        </g>
        <circle fill={class4Fill} cx="409.63" cy="119.93" r="18" />
        <g opacity={class5Opacity}>
          <path
            fill={class3Fill}
            d="M401.34,123.67a8.08,8.08,0,1,1,10.56-4.38A8.08,8.08,0,0,1,401.34,123.67Z"
          />
        </g>
        <circle fill={class4Fill} cx="303.63" cy="463.93" r="18" />
        <g opacity={class5Opacity}>
          <path
            fill={class3Fill}
            d="M295.34,467.67a8.08,8.08,0,1,1,10.56-4.38A8.08,8.08,0,0,1,295.34,467.67Z"
          />
        </g> */}
        <path
          fill={class6Fill}
          d="M235,28.07c-8.86.79-16.49,8.47-20.9,17.3-13.88,27.83-10.58,65-11.32,95.35-1,39.71-16.46,54.23-47.45,60C124.85,206.47,93.82,211,62.9,213.22,47,214.36,26.33,216.3,22.61,235.63c-2.69,14,6.77,23.36,18.75,28.27,31.24,12.82,62.76,24.37,93.23,38.9,19,9.05,33.57,22.84,30.92,45.4-2,17.43-9,34.8-13.38,51.79-4,15.44-7.88,31-10.4,46.76-1.46,9.1-5.48,24.56,2.29,32,10.52,10.11,27.78,1.06,36.93-6.27,24.79-19.85,37.89-51.32,64.4-69.34,24.22-16.47,57.14-13.56,80.38-2.91s68.76,36.8,68.76,36.8,26.15,20.34,43.58,3.88-3.87-45.52-3.87-45.52q-12.92-21.65-25.91-43.25c-12.69-21.1-33.68-44.22-19.65-69.64,12.13-22,39-41.08,58.77-55.81,17.2-12.81,56.51-34.11,39.09-60.82-14.53-22.28-61-4.84-61-4.84-23.9,8.18-49.81,15.05-75.28,13.51-11.86-.72-24.6-3.15-33.86-11-9-7.65-14.91-18.34-19.3-29.12-11.17-27.4-20.19-55.17-33.29-81.82-3.79-7.71-9-15.88-16.18-20.83A18.87,18.87,0,0,0,235,28.07Z"
        />
        <g opacity={class2Opacity}>
          <path
            fill={class3Fill}
            d="M263.27,252.64a5,5,0,0,1-4.86-3.87l-.2-.82a5,5,0,0,1,9.74-2.29l.2.85a5,5,0,0,1-3.74,6A4.92,4.92,0,0,1,263.27,252.64Zm-4.51-20.38a5,5,0,0,1-4.89-4l-.21-1a5,5,0,0,1,9.8-2l.2,1a5,5,0,0,1-3.87,5.92A5.21,5.21,0,0,1,258.76,232.26Zm-4.06-20.62a5,5,0,0,1-4.91-4.09l-.18-1a5,5,0,0,1,9.83-1.83l.18,1a5,5,0,0,1-4,5.83A4.67,4.67,0,0,1,254.7,211.64ZM251.06,191a5,5,0,0,1-4.93-4.18l-.16-1a5,5,0,1,1,9.87-1.63l.16,1a5,5,0,0,1-4.11,5.76A5.9,5.9,0,0,1,251.06,191Zm-3.27-20.75a5,5,0,0,1-4.94-4.26l-.14-1a5,5,0,1,1,9.89-1.47l.14,1a5,5,0,0,1-4.2,5.69A4.74,4.74,0,0,1,247.79,170.21Zm-2.93-20.81a5,5,0,0,1-5-4.35l-.13-1a5,5,0,0,1,9.91-1.32l.13,1a5,5,0,0,1-4.3,5.61A4.89,4.89,0,0,1,244.86,149.4Zm-2.62-20.86a5,5,0,0,1-5-4.4l-.12-1a5,5,0,1,1,9.93-1.18l.12,1a5,5,0,0,1-4.37,5.56A4,4,0,0,1,242.24,128.54Zm-2.33-20.89a5,5,0,0,1-5-4.48l-.1-1a5,5,0,1,1,9.95-1l.1,1a5,5,0,0,1-4.45,5.5Zm-2-20.93a5,5,0,0,1-5-4.55l-.09-1a5,5,0,1,1,10-.89l.09,1a5,5,0,0,1-4.53,5.43Zm-1.68-21a5,5,0,0,1-5-4.66l-.07-1a5,5,0,0,1,10-.62l.07,1a5,5,0,0,1-4.65,5.33Z"
          />
        </g>
        <g opacity={class2Opacity}>
          <path
            fill={class3Fill}
            d="M162,468.73a5,5,0,0,1-4.71-6.65l.33-.94a5,5,0,0,1,9.44,3.3l-.34.95A5,5,0,0,1,162,468.73ZM169.22,449a5,5,0,0,1-4.67-6.79l.36-.92a5,5,0,1,1,9.34,3.55l-.36.94A5,5,0,0,1,169.22,449ZM177,429.46a5.06,5.06,0,0,1-1.9-.37,5,5,0,0,1-2.73-6.53l.39-.93a5,5,0,0,1,9.24,3.82l-.38.92A5,5,0,0,1,177,429.46Zm8.22-19.33a5,5,0,0,1-4.58-7l.41-.92a5,5,0,1,1,9.16,4l-.41.91A5,5,0,0,1,185.18,410.13ZM193.86,391a5,5,0,0,1-4.53-7.12l.42-.9a5,5,0,1,1,9.06,4.23l-.42.91A5,5,0,0,1,193.86,391ZM203,372.05a5.13,5.13,0,0,1-2.21-.51,5,5,0,0,1-2.28-6.7l.45-.9a5,5,0,0,1,9,4.42l-.44.9A5,5,0,0,1,203,372.05Zm9.48-18.75A5,5,0,0,1,208,346l.47-.91a5,5,0,1,1,8.86,4.63l-.45.86A5,5,0,0,1,212.43,353.3Zm9.87-18.55a5,5,0,0,1-4.39-7.4l.48-.88a5,5,0,0,1,8.78,4.79l-.48.88A5,5,0,0,1,222.3,334.75Zm10.23-18.36a5,5,0,0,1-4.34-7.48l.5-.87a5,5,0,0,1,8.68,5l-.49.87A5,5,0,0,1,232.53,316.39Zm10.6-18.15a5,5,0,0,1-4.29-7.56l.52-.88a5,5,0,0,1,8.57,5.16l-.5.84A5,5,0,0,1,243.13,298.24Zm11-17.92a5,5,0,0,1-4.22-7.67l.53-.85a5,5,0,0,1,8.46,5.34l-.54.85A5,5,0,0,1,254.12,280.32Z"
          />
        </g>
        <g opacity={class2Opacity}>
          <path
            fill={class3Fill}
            d="M407.6,410.05a5,5,0,0,1-4.17-2.23l-.54-.82a5,5,0,0,1,8.31-5.56l.56.85a5,5,0,0,1-4.16,7.76Zm-12.2-17.11a5,5,0,0,1-4-2l-.59-.79a5,5,0,1,1,7.95-6.06l.61.81a5,5,0,0,1-4,8Zm-13.07-16.46a5,5,0,0,1-3.85-1.8l-.64-.78a5,5,0,0,1,7.7-6.38l.63.76a5,5,0,0,1-3.84,8.2Zm-13.7-16a5,5,0,0,1-3.74-1.67l-.66-.75a5,5,0,1,1,7.46-6.65l.67.75a5,5,0,0,1-3.73,8.32ZM354.45,345a5,5,0,0,1-3.65-1.58l-.68-.72a5,5,0,1,1,7.29-6.85l.69.74a5,5,0,0,1-3.65,8.41Zm-14.56-15.17a5,5,0,0,1-3.56-1.48l-.71-.73a5,5,0,1,1,7.13-7l.69.71a5,5,0,0,1-3.55,8.51ZM325,315a5,5,0,0,1-3.49-1.43l-.71-.69a5,5,0,1,1,7-7.16l.72.71A5,5,0,0,1,325,315Zm-15.16-14.57a5,5,0,0,1-3.42-1.36l-.73-.69a5,5,0,1,1,6.85-7.28l.72.68a5,5,0,0,1-3.42,8.65Zm-15.44-14.3A5,5,0,0,1,291,284.8l-.74-.67a5,5,0,0,1,6.72-7.4l.75.68a5,5,0,0,1-3.37,8.7Zm-15.74-14a5,5,0,0,1-3.27-1.22l-.75-.65a5,5,0,0,1,6.5-7.6l.8.68a5,5,0,0,1-3.28,8.79Z"
          />
        </g>
        <g opacity={class2Opacity}>
          <path
            fill={class3Fill}
            d="M241.36,252.64a4.71,4.71,0,0,1-.53,0l-1-.1a5,5,0,0,1,1-9.95l1,.11a5,5,0,0,1-.52,10Zm-21-2H220l-1-.09a5,5,0,1,1,.9-10l1,.08a5,5,0,0,1-.43,10Zm-21-1.7h-.39l-1-.08a5,5,0,1,1,.73-10l1,.08a5,5,0,0,1-.38,10Zm-21-1.47h-.33l-1-.06a5,5,0,1,1,.64-10l1,.06a5,5,0,0,1-.32,10Zm-21.25-1.24.27-5-.32,5-1-.05a5,5,0,0,1,.56-10l.93,0-.21,5Zm-20.72-1h-.21l-1,0a5,5,0,1,1,.41-10l1,0a5,5,0,0,1-.2,10Zm-21-.73h-.13l-1,0a5,5,0,0,1-4.85-5.14,5.06,5.06,0,0,1,5.14-4.86l1,0a5,5,0,0,1-.13,10Zm-21-.43H93.44a5,5,0,0,1,.07-10h1.06a5,5,0,0,1-.06,10Zm-22-.07a5,5,0,0,1,0-10h1a5,5,0,0,1,0,10h-1Z"
          />
        </g>
        <g opacity={class2Opacity}>
          <path
            fill={class3Fill}
            d="M284.16,248.46a5,5,0,0,1-2.1-9.54l.94-.43a5,5,0,1,1,4.16,9.09l-.91.42A5,5,0,0,1,284.16,248.46Zm19.26-8.58a5,5,0,0,1-2-9.59l.91-.39a5,5,0,1,1,4,9.16l-.92.4A5,5,0,0,1,303.42,239.88Zm19.35-8.27a5,5,0,0,1-1.93-9.62l.92-.38a5,5,0,1,1,3.85,9.23l-.92.38A4.85,4.85,0,0,1,322.77,231.61Zm19.45-8a5,5,0,0,1-1.87-9.64l.92-.37a5,5,0,0,1,3.75,9.27l-.94.38A5.08,5.08,0,0,1,342.22,223.62Zm19.57-7.7a5,5,0,0,1-1.79-9.67l.92-.35a5,5,0,1,1,3.6,9.33l-.94.36A4.92,4.92,0,0,1,361.79,215.92Zm19.68-7.35a5,5,0,0,1-1.7-9.7l.94-.34a5,5,0,1,1,3.39,9.4l-.93.34A5,5,0,0,1,381.47,208.57Zm19.84-6.94a5,5,0,0,1-1.59-9.74l.95-.32a5,5,0,1,1,3.18,9.48l-.94.32A5.25,5.25,0,0,1,401.31,201.63Zm20-6.42a5,5,0,0,1-1.45-9.79l1-.29a5,5,0,0,1,2.9,9.57l-1,.29A4.86,4.86,0,0,1,421.33,195.21Zm20.24-5.7a5,5,0,0,1-1.24-9.84l1-.25a5,5,0,1,1,2.47,9.69l-1,.24A4.8,4.8,0,0,1,441.57,189.51Zm21.52-4.72-1-4.9-.82-4.93.52-.1a5,5,0,0,1,1.8,9.84Zm-1-4.9h0Z"
          />
        </g>
        <g opacity={class7Opacity}>
          <path
            fill={class8Fill}
            d="M139.57,455.38s17.23,27.14,37.06,0,45.93-74.12,95-81.43,90.82,20.88,101.26,29.23,64.08,47,71.71,16.71c0,0,4.15,36.53-31.69,26.09,0,0-22.62-10.78-33.41-17.39s-59.85-41.67-101.61-36.67-63.68,41.19-77.25,57.54S147.4,515.93,139.57,455.38Z"
          />
        </g>
        <g opacity={class7Opacity}>
          <path
            fill={class8Fill}
            d="M24.74,230.41s2.61,11,23.49,20.36c40,18,147.19,30.27,116.92,97.09,0,0,3.13-26.56-25.58-42.51l-92-38.92S13.78,258.08,24.74,230.41Z"
          />
        </g>
        <g opacity={class7Opacity}>
          <path
            fill={class8Fill}
            d="M382.81,297.75s-11-30.28,18.26-54.29,66.82-53.24,66.82-53.24,20.18-17.05,12.18-29.92c0,0,27.83,15.65-4.18,45.23L408,257.73S382.28,277.91,382.81,297.75Z"
          />
        </g>
        <g opacity={class7Opacity}>
          <path
            fill={class3Fill}
            d="M203.25,111.93S209,54.51,236.13,53.47,279.28,89,279.28,89s-19.14-63.68-43.15-60.55S204.82,59.73,203.25,111.93Z"
          />
        </g>
        <g opacity={class7Opacity}>
          <path
            fill={class3Fill}
            d="M22.63,239s9.94-8.08,30.82-10.16,92.91-7.31,120.05-16.71,29.45-38.62,28.3-58.46c0,0-2.55,44.55-55.1,48.37a881.14,881.14,0,0,0-95,12.18S23.13,216.81,22.63,239Z"
          />
        </g>
        <g opacity={class7Opacity}>
          <path
            fill={class3Fill}
            d="M306.08,153.68s15.66,36.54,58.46,35.5c0,0,36.53-2.09,61.59-14.62s50.79-14.19,60.37-8.66c0,0-15.48-22.66-61.41-6C425.09,160,347.83,196.49,306.08,153.68Z"
          />
        </g>
      </g>
      <g id="Lines">
        {/* <path
          fill={class8Fill}
          d="M448.52,80.65a29,29,0,1,1,29-29A29,29,0,0,1,448.52,80.65Zm0-48a19,19,0,1,0,19,19A19,19,0,0,0,448.52,32.65Z"
        /> */}
        {/* <path
          fill={class8Fill}
          d="M103.52,156.65a29,29,0,1,1,29-29A29,29,0,0,1,103.52,156.65Zm0-48a19,19,0,1,0,19,19A19,19,0,0,0,103.52,108.65Z"
        />
        <path
          fill={class8Fill}
          d="M409.37,142.93a23,23,0,1,1,23-23A23,23,0,0,1,409.37,142.93Zm0-36a13,13,0,1,0,13,13A13,13,0,0,0,409.37,106.93Z"
        />
        <path
          fill={class8Fill}
          d="M303.37,486.93a23,23,0,1,1,23-23A23,23,0,0,1,303.37,486.93Zm0-36a13,13,0,1,0,13,13A13,13,0,0,0,303.37,450.93Z"
        /> */}
        {/* StarFish outline */}
        {/* <path
          fill={class8Fill}
          d="M155.67,488.29a21.19,21.19,0,0,1-15.12-5.9c-8.75-8.42-6.11-23.19-4.36-33,.22-1.23.43-2.4.6-3.47,2.49-15.56,6.23-30.59,10.5-47.22,1.49-5.81,3.29-11.72,5-17.44,3.4-11.09,6.91-22.55,8.21-33.68,2-17.14-7.18-30.33-28.1-40.3-21.55-10.28-44.1-19.24-65.9-27.91-8.88-3.53-18.06-7.18-27.08-10.88-16.65-6.83-24.58-19.17-21.76-33.85,4.53-23.56,29.77-25.37,44.85-26.45,28-2,58.06-6,91.82-12.38,15.32-2.87,25.51-7.84,32.08-15.62,7.26-8.6,10.84-21.19,11.29-39.63.14-5.71.14-11.6.13-17.83,0-26.27-.05-56,11.71-79.63,5.83-11.68,15.15-19.18,24.93-20a23.78,23.78,0,0,1,15.9,4.55c6.78,4.68,12.61,12.12,17.83,22.74,8.79,17.89,15.85,36.49,22.68,54.49,3.44,9.08,7,18.48,10.75,27.65,5,12.29,10.87,21.19,17.92,27.2,6.88,5.87,16.7,9,30.91,9.86,26.07,1.58,52.87-6.24,73.3-13.23,2.91-1.08,50.52-18.28,66.88,6.82,17.78,27.25-13.77,49.09-32.62,62.14-2.8,1.94-5.45,3.78-7.66,5.42l-3.63,2.7C427.67,247.61,403.9,265.25,393,285c-10.33,18.71,1.47,36.74,12.89,54.18,2.25,3.44,4.58,7,6.66,10.46,8.23,13.67,16.91,28.17,25.81,43.08,2.18,3,22.91,33.22,3.13,51.9-19.45,18.37-46.46-.83-49.78-3.33-3.85-2.2-46.25-26.43-68.08-36.43-31.66-14.51-60.45-7.73-75.48,2.49-13.53,9.2-23.35,22-33.74,35.56-9,11.78-18.36,23.95-30.35,33.55-2.91,2.33-10.65,8-19.72,10.59A32,32,0,0,1,155.67,488.29ZM236.45,33c-.35,0-.7,0-1,0h0c-7.41.66-13.57,8-16.87,14.56-10.71,21.47-10.68,50-10.66,75.15,0,6.3,0,12.24-.13,18.08-1,39.37-15.89,58.15-51.53,64.84-34.14,6.4-64.54,10.5-93,12.53-8.42.6-16.53,1.36-23.22,4-7.21,2.88-11.19,7.43-12.52,14.32C25,249.68,36.3,256.42,43.26,259.28c9,3.68,18.12,7.31,27,10.83,22,8.73,44.67,17.76,66.51,28.18,24.92,11.88,36.27,28.88,33.73,50.5-1.41,12-5.05,23.92-8.57,35.44-1.72,5.61-3.49,11.41-4.93,17-4.2,16.38-7.88,31.17-10.3,46.31-.18,1.13-.4,2.36-.63,3.66-1.38,7.67-3.46,19.27,1.44,24,8,7.64,22.81-.53,30.35-6.56,11-8.85,19.6-20,28.66-31.83,10.42-13.59,21.2-27.65,36-37.75,27.5-18.69,63.12-13.47,85.28-3.31,23.18,10.62,67.3,35.93,69.16,37a3.27,3.27,0,0,1,.58.39c.23.17,23,17.48,37.08,4.18,5.69-5.37,6.79-13.34,3.3-23.7a63,63,0,0,0-7.77-15.22c-.09-.13-.18-.26-.26-.4-8.94-15-17.65-29.51-25.9-43.23-2-3.3-4.17-6.63-6.47-10.15-12.43-19-26.52-40.51-13.27-64.48,11.93-21.61,36.66-40,56.54-54.72l3.62-2.69c2.34-1.74,5.06-3.63,7.94-5.62,22.34-15.47,41.44-30.82,29.94-48.46-10.12-15.52-43.19-7.35-55.07-2.89l-.14,0c-21.31,7.29-49.34,15.45-77.2,13.77-16.49-1-28.19-4.88-36.8-12.23-8.3-7.07-15.06-17.22-20.69-31-3.79-9.28-7.37-18.73-10.84-27.87-6.75-17.78-13.72-36.17-22.3-53.62-4.39-8.93-9.28-15.3-14.54-18.93A14.53,14.53,0,0,0,236.45,33ZM235,28.07h0Z"
        /> */}
      </g>
    </chakra.svg>
  )
}

export default StarfishIcon
