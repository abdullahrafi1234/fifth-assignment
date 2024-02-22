function clickSeat(){
    const backgroundChange = document.getElementById('A1')
    backgroundChange.classList.add('bg-[#1DD100]')
}








const allBtn = document.getElementsByClassName('add-btn')
for(const btn of allBtn)
    btn.addEventListener('click', function(event){
        const a1 = event.target.parentNode.childNodes[5].innerText
        console.log(a1)

        const selectedContainer = document.getElementById('selected-container2');

        // update seat
        const cartCount = getConvertedValue('current-seat')

        document.getElementById('current-seat').innerText = cartCount + 1



        const totalSeat = getConvertedValue ('total-seat')

        document.getElementById('total-seat').innerText = totalSeat - 1


        const firstCart = getConvertedValue('current-seat')
        if(firstCart +1 >5 ){
            alert('limit over')
            return;
        }




        const div = document.createElement('div')
        div.classList.add('flex')
        div.classList.add('justify-between')
        div.classList.add('w-[500px]')

        const p1 =document.createElement('p')
        const p2 =document.createElement('p')
        const p3 =document.createElement('p')
        const p4 = 550;

        p1.innerText = a1;
        p2.innerText = 'Economy'
        p3.innerText = '550'

        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)

        selectedContainer.appendChild(div)
        updateTotalCost(p4)
        updateGrandTotal()
    })

    function updateTotalCost(value){

        const totalCost = getConvertedValue('total-cost')
        const sum = totalCost + parseInt(value)
        document.getElementById('total-cost').innerText = sum;
        

        
    }

    function updateGrandTotal(){
        const totalCost = getConvertedValue('total-cost')
        document.getElementById('grand-total').innerText = totalCost
    }


    // function updateGrandTotal(status){
    //     if(status==undefined){
    //         document.getElementById('grand-total').innerText = totalCost
    //     }

    //     else{
    //         const couponCode = document.getElementById('coupon-code').value

    //         if(couponCode == 'NEW15'){
    //             const discounted = totalCost *0.2

    //             document.getElementById('grand-total').innerText = totalCost-discounted

    //         }
    //         else{
    //             alert('Please enter valid code')
    //         }
    //     }
    // }


    function getConvertedValue(id){
        const price =document.getElementById(id).innerText
        const convertPrice = parseInt(price)
        return convertPrice;
        }






// const result = getConvertedValue('total-price')
// console.log(result)