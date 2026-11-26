function EmployeeCard({name,designation,salary}){
    return(
        <div>
            <h3>{name}</h3>
            <p>{designation}</p>
            <p>Salary:₹{salary}</p>
        </div>
    )
}

export default EmployeeCard
