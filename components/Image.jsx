import Image from "next/image";


// pass props
export default function ImageComponent(props) {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
              
                    marginTop: '1rem',

                }}
            >
                {/* border to image */}
                <div style={{ border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: 10 , padding: '1rem'}}>

                    <Image src={props.src} width={props.width} height={props.height} />
                </div>


            </div>
            {props.caption && (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: '0.5rem',

                    }}
                >
                    <span style={{   fontWeight: 400, display: "flex", justifyContent: "center" }}>
                        {props.caption}
                    </span>
                </div>
            )}

        </>
    );
}