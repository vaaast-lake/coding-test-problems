#include <bits/stdc++.h>
using namespace std;

int n;
char a[68][68];
string s;

string quad(int y, int x, int size)
{
  if (size == 1)
    return string(1, a[y][x]);
  char b = a[y][x];
  string ret = "";
  for (int i = y; i < y + size; ++i)
  {
    for (int j = x; j < x + size; ++j)
    {
      if (a[i][j] != b)
      {
        ret += "(";
        ret += quad(y, x, size / 2);
        ret += quad(y, x + size / 2, size / 2);
        ret += quad(y + size / 2, x, size / 2);
        ret += quad(y + size / 2, x + size / 2, size / 2);
        ret += ")";
        return ret;
      }
    }
  }
  return string(1, a[y][x]);
}

int main()
{
  ios_base::sync_with_stdio(false);
  // cin.tie(NULL);
  // cout.tie(NULL);
  // freopen("input.txt", "r", stdin);
  // freopen("output.txt", "w", stdout);

  cin >> n;
  for (int i = 0; i < n; ++i)
  {
    cin >> s;
    for (int j = 0; j < n; ++j)
    {
      a[i][j] = s[j];
    }
  }
  // for (int i = 0; i < n; ++i)
  //   for (int j = 0; j < n; ++j)
  //     scanf("%1d", &a[i][j]);

  cout << quad(0, 0, n) << "\n";

  return 0;
}