#include <bits/stdc++.h>
using namespace std;

int m, n, j, l, r, tmp, ret;

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  // freopen("input.txt", "r", stdin);
  // freopen("output.txt", "w", stdout);

  cin >> n >> m >> j;

  l = 1;
  for (int i = 0; i < j; ++i)
  {
    r = l + m - 1;
    cin >> tmp;
    if (tmp >= l && tmp <= r)
      continue;

    if (tmp < l)
    {
      ret += (l - tmp);
      l = tmp;
    }
    else if (tmp >= l)
    {
      l += (tmp - r);
      ret += (tmp - r);
    }
  }

  cout << ret << "\n";

  return 0;
}