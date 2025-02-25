#include <bits/stdc++.h>
using namespace std;

int t, n;
string a, b;

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  // freopen("input.txt", "r", stdin);
  // freopen("output.txt", "w", stdout);

  cin >> t;
  while (t--)
  {
    unordered_map<string, int> _map;
    cin >> n;
    for (int i = 0; i < n; ++i)
    {
      cin >> a >> b;
      _map[b]++;
    }
    // 경우의 수는 수가 커질 수 있기 때문에 long long 선언이 안전하다.
    long long ret = 1;
    for (auto c : _map)
    {
      ret *= ((long long)c.second + 1);
    }
    ret--;
    cout << ret << '\n';
  }

  return 0;
}