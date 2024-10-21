// 23. Tính toán bảo hiểm:
//  • Tạo lớp Insurance để tính toán mức bảo hiểm cho xe ô tô dựa trên các yếu tố như tuổi xe, giá trị xe.
// Xe mới mua: 100% giá trị
// Xe sử dụng 1 - 3 năm: 85% giá trị
// Xe sử dụng 3 - 6 năm: 70% giá trị
// Xe sử dụng 6 - 10 năm: 55% giá trị
// Xe sử dụng trên 10 năm: 40% giá trị


class Insurance {
    constructor(vehilce_Age, value) {
        this.vehilce_Age = vehilce_Age
        this.value = value
       
    }
    
    calculator_Insurance(){
        let per = 0
        let total = 0
        if (this.vehilce_Age == 0) {
            per = 100
            total = (per/100) * this.value   
            // console.log(total);
           
        }else if(this.vehilce_Age < 3 && this.vehilce_Age > 1){
            per = 85
            total = (per/100) * this.value   
        }else if(this.vehilce_Age < 6 && this.vehilce_Age > 3){
            per = 75
            total = (per/100) * this.value   
        }else if(this.vehilce_Age < 10 && this.vehilce_Age > 6){
            per = 55
            total = (per/100) * this.value   
        }
        return total;
    }
}
const insurance = new Insurance(4, 1000000);
console.log(insurance.calculator_Insurance());

// xong