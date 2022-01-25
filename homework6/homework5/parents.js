function showAlertWithParentsData() {
    const momName = document.getElementById("name").value;
    const dadName = document.getElementById("name2").value;
    const result = `${momName},${dadName}`;
    alert(result);
    console.log(momName, dadName);

}