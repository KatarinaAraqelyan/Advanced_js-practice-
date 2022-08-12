#include <iostream>

using namespace std;

int strr(char* str){
int count = 0;
for (int i = 0; i <10; ++i) {
    if(str[i] == '\0'){
       break;
    }
    count++;
}
    return  count;
}

int main()
{
    char str[] = "hello";
    cout << "string length = " << strr(str) << endl;
}


































