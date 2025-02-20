#include <bits/stdc++.h>
using namespace std;

// string str;
// int f = 1;

// int main()
// {
//   ios_base::sync_with_stdio(false);
//   cin.tie(NULL);
//   cout.tie(NULL);
//   freopen("input.txt", "r", stdin);
//   freopen("output.txt", "w", stdout);

//   cin >> str;

//   for (int i = 0; i < str.length(); ++i)
//   {
//     if (str[i] == str[str.length() - i - 1])
//       continue;
//     else
//     {
//       f = 0;
//       break;
//     }
//   }
//   cout << f;

//   return 0;
// }

string s, temp;

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  freopen("input.txt", "r", stdin);
  freopen("output.txt", "w", stdout);

  cin >> s;
  temp = s;
  reverse(temp.begin(), temp.end());
  if (temp == s)
    cout << 1 << "\n";
  else
    cout << 0 << "\n";

  return 0;
}