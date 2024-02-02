import * as React from "react"
import { SVGProps } from "react"
const ClockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill='#fff' {...props}>
    <path d="M13 .156C5.902.156.156 5.902.156 13c0 7.098 5.746 12.844 12.844 12.844 7.098 0 12.844-5.746 12.844-12.844C25.844 5.902 20.098.156 13 .156ZM11.969 3c.039-.004.086.004.125 0v.5a.907.907 0 0 0 1.812 0V3c4.82.43 8.664 4.273 9.094 9.094h-.594a.908.908 0 0 0 .094 1.812h.5A10.043 10.043 0 0 1 13.906 23v-.5a.896.896 0 0 0-1-.906.896.896 0 0 0-.812.906v.5A10.043 10.043 0 0 1 3 13.906h.5a.907.907 0 0 0 0-1.812H3C3.43 7.313 7.203 3.484 11.969 3ZM13 5.438c-.492 0-.703.437-.719.687L12 11.406c-.535.336-.906.914-.906 1.594 0 1.047.86 1.906 1.906 1.906.055 0 .102-.027.156-.031l4.25 3.813c.196.171.703.328 1.157-.125.457-.454.324-.993.156-1.188l-3.813-4.344V13c0-.703-.398-1.297-.969-1.625l-.218-5.25c-.012-.25-.23-.688-.719-.688Z" />
  </svg>
)
export default ClockIcon