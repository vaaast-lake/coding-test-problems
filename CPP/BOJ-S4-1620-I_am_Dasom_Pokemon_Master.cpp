#include <bits/stdc++.h>
using namespace std;

// int n, m;
// string s;
// map<string, int> mp;
// map<int, string> mp2;
// string a[100004];

// int main()
// {
//   ios_base::sync_with_stdio(false);
//   cin.tie(NULL);
//   cout.tie(NULL);
//   // freopen("input.txt", "r", stdin);
//   // freopen("output.txt", "w", stdout);

//   cin >> n >> m;
//   for (int i = 0; i < n; ++i)
//   {
//     cin >> s;
//     mp[s] = i + 1;
//     // mp2[i + 1] = s;
//     a[i + 1] = s;
//   }

//   for (int i = 0; i < m; ++i)
//   {
//     cin >> s;
//     if (atoi(s.c_str()) == 0)
//     {
//       cout << mp[s] << '\n';
//     }
//     else
//     {
//       cout << a[atoi(s.c_str())] << '\n';
//       // cout << mp2[atoi(s.c_str())] << '\n';
//     }
//   }

//   return 0;
// }

int n, m;
unordered_map<string, int> mp;
string s, a[100004];

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  freopen("input.txt", "r", stdin);
  freopen("output.txt", "w", stdout);

  cin >> n >> m;
  for (int i = 0; i < n; ++i)
  {
    cin >> s;
    a[i + 1] = s;
    mp[s] = i + 1;
  }

  for (int i = 0; i < m; ++i)
  {
    cin >> s;
    if (atoi(s.c_str()) == 0)
    {
      cout << mp[s] << '\n';
    }
    else
    {
      cout << a[atoi(s.c_str())] << '\n';
    }
  }

  return 0;
}