import ClipLoader from "react-spinners/ClipLoader";
import {React, CSSProperties} from 'react'

const Spinner = ({loading}) => {
    const override = {
        display: "block",
        margin: "100px auto",
        borderColor: "#4338ca",
      };
  return (
     
        <ClipLoader
            color= "#4338ca"
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
         />
  )
}

export default Spinner