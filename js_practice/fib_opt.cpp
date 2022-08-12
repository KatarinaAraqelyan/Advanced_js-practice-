#include <iostream>
using namespace std;

class Fib {
  public:	
   int operator() (int n) {
      if(n < 0)
	  {
        return 0;
      }
	  else if (n == 0 || n == 1 || n == 2) 
	  {
		cache[n] = n;
        return n;
           }
      if (!cache[n]) 
	  {
      return cache[n] = this->operator()(n-1) + this->operator()(n-2);
      }
   
 }
 private:
   int cache[100];
  
};
 int main(){
	  Fib f;
      cout << f(7) << endl;
  }
