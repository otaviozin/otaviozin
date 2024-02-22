export default function Container(props){
    return(
        <div className='border'>
            <div className='container'>
                {props.children}
            </div>
        </div>
    );
}