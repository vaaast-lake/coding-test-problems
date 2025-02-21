#include <bits/stdc++.h>
using namespace std;

int n;
string s, pat, pre, suf;

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  // freopen("input.txt", "r", stdin);
  // freopen("output.txt", "w", stdout);

  cin >> n;
  cin >> pat;
  int pos = pat.find('*');
  pre = pat.substr(0, pos);
  suf = pat.substr(pos + 1);

  for (int i = 0; i < n; ++i)
  {
    cin >> s;
    // 접두 + 접미 길이가 확인하려는 문자열보다 긴 경우
    if (pre.size() + suf.size() > s.size())
      cout << "NE\n";
    else
    {
      if (pre == s.substr(0, pre.size()) && suf == s.substr(s.size() - suf.size()))
        cout << "DA\n";
      else
        cout << "NE\n";
    }
  }

  return 0;
}