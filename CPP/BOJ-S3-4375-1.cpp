#include <bits/stdc++.h>
using namespace std;
typedef long long ll;

int n;

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  freopen("input.txt", "r", stdin);
  freopen("output.txt", "w", stdout);

  // 입려값 개수가 정해지지 않았을 때, EOF를 이용할 수 있다.
  while (scanf("%d", &n) != EOF)
  {
    ll cnt = 1, ret = 1;
    while (cnt % n != 0)
    {
      cnt = (cnt * 10 + 1) % n;
      ret++;
    }
    printf("%lld\n", ret);
  }

  return 0;
}