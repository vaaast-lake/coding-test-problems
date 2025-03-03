#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
ll a, b, c;
ll go(ll a, ll b)
{
  if (b == 1)
    return a % c;

  ll ret = go(a, b / 2);
  ret = (ret * ret) % c;

  // b가 홀수일 경우
  if (b % 2)
    ret = (ret * a) % c;
  return ret;
}

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  // freopen("input.txt", "r", stdin);
  // freopen("output.txt", "w", stdout);

  cin >> a >> b >> c;

  cout << go(a, b) << '\n';

  return 0;
}