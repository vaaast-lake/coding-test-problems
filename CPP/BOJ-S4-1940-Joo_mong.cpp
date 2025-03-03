#include <bits/stdc++.h>
using namespace std;

int n, m, a[15004], cnt;

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
    cin >> a[i];
  }

  // 고유번호 100,000이면 두 개 조합 시 최대 200,000.
  // m은 최대 10,000,000으로, 200,000 초과하는 경우 탐색 불필요.
  if (m > 200000)
    cout << 0 << '\n';
  else
  {
    for (int i = 0; i < n; ++i)
    {
      for (int j = i + 1; j < n; ++j)
      {
        if (a[i] + a[j] == m)
          ++cnt;
      }
    }
    cout << cnt << '\n';
  }

  return 0;
}