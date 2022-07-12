#include <iostream>
#include <cstring>
using namespace std;

char* rev(char* str){   
	int size = strlen(str);
	int tmp;
	for( int i = 0; i < size/2 ; ++i){
		 tmp = str[i];
         str[i] = str[size - i - 1];
		 str[size - i - 1] = tmp;
	}	
	return str;
}
 
int main(){
    char str[] = "Katarina" ;
	cout << rev(str) << endl;
	cout << str << endl;
}



























