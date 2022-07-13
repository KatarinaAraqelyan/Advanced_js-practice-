#include <iostream>

using namespace std;

char* strset(char* s, char ch){
   int i = 0;
   while(*(s + i) != '\0'){
	*(s + i) = ch;
	i++;
}
   return s;
}
int main(){

 char str[] = "v";
 char ch = 's';

 cout << strset(str, ch) << endl;

}
