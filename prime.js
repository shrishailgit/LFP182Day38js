function prime(number)
{
    if (number == 0 || number == 1){
       
        return false;
    }
    for (var i = 2; i< number; i++) {
        if (number % i == 0){
            return false;
        }
    }
return true;
}
prime(5)