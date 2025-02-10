function atmSimulator() {
let balance = 500
 while (balance > 0) {
    console.log(`Your balance: $${balance}`)
    let withdrawAmount = parseInt(prompt("Enter amount to withdraw:"))
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        console.log("Invalid Input. Please enter a valid amount.")
        continue;
    }
    if (withdrawAmount > balance) {
        console.log("Insufficient funds")
    } else {
        balance = balance - withdrawAmount
    }
 }
 console.log("Your balance: $0")
 console.log("Account empty")

}
atmSimulator()