#include <bits/stdc++.h>
using namespace std;

string s, ret;
int cnt[26], flag;
char mid;

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  // freopen("input.txt", "r", stdin);
  // freopen("output.txt", "w", stdout);

  cin >> s;
  for (char a : s)
  {
    cnt[a - 65]++;
  }

  for (int i = 25; i >= 0; --i)
  {
    if (cnt[i] & 1)
    {
      mid += char(i + 65);
      ++flag;
      --cnt[i];
    }
    if (flag == 2)
    {
      cout << "I'm Sorry Hansoo" << '\n';
      exit(0);
    }
    for (int j = 0; j < cnt[i] / 2; ++j)
    {
      ret = char(i + 65) + ret;
      ret += char(i + 65);
    }
  }

  if (mid)
    ret.insert(ret.begin() + ret.size() / 2, mid);

  cout << ret << '\n';

  return 0;
}