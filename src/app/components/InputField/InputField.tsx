
export default function InputField({property}: {property: string}) {
    return (
        <div>
            {/* <label htmlFor="name">{property}</label> */}
            <input type="text" name={property} id={property} placeholder={property} />
        </div>
    )
}