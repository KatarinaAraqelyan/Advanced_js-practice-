#include <iostream>
#include <cstring>
using namespace std;

char* strcat (char* s1, char* s2) {
 int len1 = strlen(s1);
 int len2 = strlen(s2);

 for(int i = 0; i <= len2 ; ++i) {
	 s1[len1 + i] = s2[i];
}
return s1;
}

int main(){

char s1[] = "";
char s2[] = "a";

cout << strcat(s1, s2) << endl;
}
